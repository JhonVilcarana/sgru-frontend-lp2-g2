import { Component, Host, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListAsigComponent} from '../list-asig/list-asig.component';
import swal from 'sweetalert2';
import { NivCompCurService } from 'src/app/services/asignacion/niv_comp_cur/niv-comp-cur.service';
import { Niv_comp_cur } from 'src/app/models/asignacion/niv_comp_cur/niv_comp_cur';
import {FormControl, Validators} from '@angular/forms';
import { Funciones3Service} from 'src/app/services/funciones3/funciones3.service';
@Component({
  selector: 'app-add-asig',
  templateUrl: './add-asig.component.html',
  styleUrls: ['./add-asig.component.css']
})
export class AddAsigComponent implements OnInit {
 niv_comp_curModel: Niv_comp_cur = new Niv_comp_cur();

 asigControl = new FormControl('', Validators.required);
 selectFormControl = new FormControl('', Validators.required);


  niv_comp_cur: any;
  planes: any[];
  cursos: any[];
  ciclos: any[];
  tipos: any[];
  lineas: any[];
  compentencias: any[];
  niveles: any[];
  @Input() isRegi3: boolean;
  @Input() isSelected: boolean;
  @Input() palomain: number;

  constructor(private funcion: Funciones3Service,private listAsigComponent: ListAsigComponent, 
    private niv_comp_curService:NivCompCurService,private router: Router) { }

  ngOnInit(): void {
    this.listcursos();
    this.listcompetencias();
    this.listniveles();
    this.mepopalomain(this.palomain);
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  updat() {
    console.log(this.niv_comp_curModel, this.niv_comp_cur);
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
      this.listAsigComponent.registrar=false;
        swal.fire(
          'Actualizado!',
          'El registro ha sido Modificado.',
          'success'
          
        )
      }
    })   
    this.niv_comp_curService.update(this.niv_comp_curModel).subscribe(

      response => {
    

        this.listAsigComponent.listarAll();
       
      }
    );
  }

 
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  mepopalomain(n: number) {
    this.niv_comp_curService.getAsignacion(n).subscribe(data => {
      this.niv_comp_cur = data["CURSOR_NIV_COM_CUR"][0]
      console.log(this.niv_comp_cur);
      this.niv_comp_curModel.nivel_competencias_curso_id = this.niv_comp_cur.NIVEL_COMPETENCIAS_CURSO_ID;
      this.niv_comp_curModel.nivel_competencias_id = this.niv_comp_cur.NIVEL_COMPETENCIAS_ID;
      this.niv_comp_curModel.plan_curso_id = this.niv_comp_cur.PLAN_CURSO_ID;
      this.niv_comp_curModel.estado = this.niv_comp_cur.ESTADO;
    });

  }
  Register():void{
    this.listAsigComponent.registrar = false;
  }
   public create():void{      
    console.log(this.niv_comp_curModel) 
    this.niv_comp_curService.add(this.niv_comp_curModel).subscribe(        
      response=>{
        this.listAsigComponent.registrar=false;
        this.listAsigComponent.listarAll();     
        this.Register();
      swal.fire('Nueva Asignacion', `Asignacion creado con exito`,"success")   
   
    })
  

    }
    
  
    listcursos(): void{
      this.niv_comp_curService.getCursos().subscribe(data=>this.cursos=data["CURSOR_PL_CU_CI"]);
    }
    
    listcompetencias(): void{
      this.niv_comp_curService.getCompetencias().subscribe(data=>this.compentencias=data["CURSOR_NICOM_NOMBRE"]);
    }
    listniveles(): void{
      this.niv_comp_curService.getNiveles().subscribe(data=>this.niveles=data["CURSOR_NIVCOMP"]);
    }
}
