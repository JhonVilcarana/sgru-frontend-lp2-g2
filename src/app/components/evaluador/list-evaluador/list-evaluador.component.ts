import { Component, OnInit } from '@angular/core';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';

@Component({
  selector: 'app-list-evaluador',
  templateUrl: './list-evaluador.component.html',
  styleUrls: ['./list-evaluador.component.css']
})
export class ListEvaluadorComponent implements OnInit {
  evaluador:any;
  evaluadores: any;
  docentes: any;
  externos: any;
  expertos: any;
  habilidades: any;
  isRegister: boolean = false;

  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO','EDITAR', 'ELIMINAR'];
  constructor(private evaluadorService: EvaluadorService) { }

  ngOnInit(): void {
    this.listDocentes();
    this.getEvaluador();
  }
  Register(): void {
    if (this.isRegister == false) {
      this.isRegister = true;
    } else {
      this.isRegister = false;
    }
  }

  listEvaluadores(): void {
    this.evaluadorService.getEvaluadores().subscribe(data => this.evaluadores = data['CURSOR_DEP']);
  }
  listDocentes(): void {
    this.evaluadorService.getDocentes().subscribe(data => this.docentes = data['CURSOR_DEP']);
  }
  listExternos(): void {
    this.evaluadorService.getExpertos().subscribe(data => this.externos = data['CURSOR_DEP']);
  }
  listExpertos(): void {
    this.evaluadorService.getExpertos().subscribe(data => this.expertos = data['CURSOR_DEP']);
  }
  listHabilidades(): void {
    this.evaluadorService.getHabilidades().subscribe(data => this.habilidades = data['CURSOR_DEP']);

  }
  getEvaluador():void{
    this.evaluadorService.getEvaluador(61).subscribe(data=>{this.evaluador=data['CURSOR_DEP'];console.log (this.evaluador);});
  }
  delete(n:number):void{
    console.log(n);
    this.evaluadorService.deleteEvaluador(n).subscribe(respone=>console.log('delete success'))
  }
  

}
