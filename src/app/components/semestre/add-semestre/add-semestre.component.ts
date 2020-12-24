import { Component, OnInit, Input, Host, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Semestre } from 'src/app/models/semestre/semestre';
import { SemestreService } from 'src/app/services/semestre/semestre.service';
import { ListSemestreComponent } from '../list-semestre/list-semestre.component'
import swal from 'sweetalert2';
import { FuncionesService } from 'src/app/services/funciones/funciones.service'

@Component({
  selector: 'app-add-semestre',
  templateUrl: './add-semestre.component.html',
  styleUrls: ['./add-semestre.component.css']
})
export class AddSemestreComponent implements OnInit {
  semestrem: Semestre = new Semestre();
  semestres: any;
  @Input() isRegi: boolean;
  @Input() isSelected: boolean;
  @Input() palomain: number;
 

  constructor(private semestreService: SemestreService, private listSemestreComponent: ListSemestreComponent,
    private router: Router, private funcion: FuncionesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mepopalomain(this.palomain);


    console.log(this.isRegi);
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  mepopalomain(n: number) {
    this.semestreService.getSemestre(n).subscribe(data => {
      this.semestres = data["CURSOR_SEMESTRE"][0]
      console.log(this.semestres);
      this.semestrem.semestre_id = this.semestres.SEMESTRE_ID;
      this.semestrem.nombre = this.semestres.NOMBRE;
      this.semestrem.estado = this.semestres.ESTADO;
    });

  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }


  updat() {
    console.log(this.semestrem, this.semestres);
    swal.fire({
      title:'Modificar',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
      this.listSemestreComponent.registrar=false;
        swal.fire(
          'Actualizado!',
          'El registro ha sido Modificado.',
          'success'
          
        )
      }
    })   
    this.semestreService.updateSemestre(this.semestrem).subscribe(

      response => {
    

        this.listSemestreComponent.listarsemestre();
       
      }
    );
  }
 

 

  
  public crear(): void {
    console.log(this.semestres)
    this.semestreService.addSemestre(this.semestres).subscribe(
      response => console.log(response))
    this.listSemestreComponent.listarsemestre();
    this.listSemestreComponent.registrar = false;

    swal.fire('Nueva Asignacion', `Asignacion creado con exito`, "success")


  }


  Register(): void {
    this.listSemestreComponent.registrar = false;
  }
  public create(): void {
    this.semestreService.addSemestre(this.semestrem).subscribe(
      response => {
        this.listSemestreComponent.registrar = false;
        swal.fire('Nuevo Semestre', `Semestre ${this.semestrem.nombre} creado con exito`, "success")


      })
    this.listSemestreComponent.listarsemestre();


  }


}