import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { NivCompService } from 'src/app/services/niv_comp/niv-comp.service';
import { Niv_comp } from 'src/app/models/niv_comp/niv_comp';
import {FormControl, Validators} from '@angular/forms';
import { ListNivCompComponent } from '../list-niv-comp/list-niv-comp.component';
import { Funciones2Service } from 'src/app/services/funciones2/funciones2.service';
@Component({
  selector: 'app-add-niv-comp',
  templateUrl: './add-niv-comp.component.html',
  styleUrls: ['./add-niv-comp.component.css']
})
export class AddNivCompComponent implements OnInit {
  niv_compModel: Niv_comp = new Niv_comp();
  nivcomp: any;
  planes: any[];
  cursos: any[];
  ciclos: any[];
  tipos: any[];
  lineas: any[];
  compentencias: any[];
  niveles: any[];
  asigControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  @Input() isRegi2: boolean;
  @Input() isSelected: boolean;
  @Input() palomain: number;
 

 
 
   constructor(private funcion: Funciones2Service,
    private activatedRoute: ActivatedRoute, private listnivcompComponent: ListNivCompComponent, private niv_compService:NivCompService,private router: Router) { }
 
   ngOnInit(): void {
     this.listcompetencias();
     this.listniveles();
     this.mepopalomain(this.palomain);
     console.log(this.isRegi2);
   }
   step = 0;
 
   setStep(index: number) {
     this.step = index;
   }
   mepopalomain(n: number) {
    this.niv_compService.getNivcomp(n).subscribe(data => {
      this.nivcomp = data["CURSOR_NIVEL_COMP"][0]
      console.log(this.nivcomp);
      this.niv_compModel.nivel_competencias_id = this.nivcomp.NIVEL_COMPETENCIAS_ID;
      this.niv_compModel.competencias_id = this.nivcomp.COMPETENCIAS_ID;
      this.niv_compModel.utils_id = this.nivcomp.UTILS_ID;
      this.niv_compModel.estado = this.nivcomp.ESTADO;
      console.log(this.niv_compModel.utils_id);
    });


  }
   nextStep() {
     this.step++;
   }
   prevStep() {
     this.step--;
   }
   /**add(): void {
     console.log(this.niv_comp_cur);
     this.asignacionService.add(this.niv_comp_cur).subscribe(response => console.log('SUCCESS'))
     this.listAsigComponent.iRegister  = false;
   }**/
   Register():void{
     this.listnivcompComponent.registrar = false;
   }
    public create():void{      
     console.log(this.niv_compModel) 
     this.niv_compService.add(this.niv_compModel).subscribe(        
       response=>{
         this.listnivcompComponent.registrar = false;     
         this.Register();
       swal.fire('Nueva Asignacion', `Asignacion creado con exito`,"success")   
    
     })
   
 this.listnivcompComponent.listarAll();
     }
     updat() {
      console.log(this.niv_compModel, this.nivcomp);
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
        this.listnivcompComponent.registrar=false;
          swal.fire(
            'Actualizado!',
            'El registro ha sido Modificado.',
            'success'
            
          )
        }
      })   
      this.niv_compService.update(this.niv_compModel).subscribe(
  
        response => {
      
  
          this.listnivcompComponent.listarAll();
         
        }
      );
    }
 
   
     
     listcompetencias(): void{
       this.niv_compService.getCompetencias().subscribe(data=>this.compentencias=data["CURSOR_COMP_NOMBRE"]);
     }
     listniveles(): void{
       this.niv_compService.getNiveles().subscribe(data=> {console.log(data)
         this.niveles=data["CURSOR_NIVCOMP"]});
     }
 }
 