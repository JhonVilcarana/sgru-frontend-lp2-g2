import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Niv_comp_cur } from 'src/app/models/asignacion/niv_comp_cur/niv_comp_cur';

import { ActivatedRoute, Data, Router } from '@angular/router';
import { NivCompCurService } from 'src/app/services/asignacion/niv_comp_cur//niv-comp-cur.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-asig',
  templateUrl: './list-asig.component.html',
  styleUrls: ['./list-asig.component.css']
})
export class ListAsigComponent implements OnInit ,AfterViewInit {
  isSelected: boolean = false;
  planes:any;
  niv_comp_cur: any = new MatTableDataSource();
  registrar: boolean = false;
  editar: boolean = false;
  notDataFound: boolean = false;
  load: boolean;
  isRegi3: boolean;
  mepo: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public displayedColumns: string[] = ['N','PLAN','CICLO','CURSO','TIPO','COMPETENCIA','NIVEL','EDITAR','ELIMINAR'];

  constructor(  private niv_comp_curService:NivCompCurService, 
    private router:Router, private activatedRoute:ActivatedRoute) {}
  

   ngAfterViewInit() {
    this.niv_comp_cur.paginator = this.paginator;
  }


  ngOnInit(): void {
   this.listarAll();
  
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.niv_comp_cur.filter = filterValue.trim().toLowerCase();
  }
 
  Editar(): void {
    if (this.editar == false) {
      this.editar = true;
    } else {
      this.editar = false;
    }
  }
    
  Register(): void {
    this.isRegi3 = true;
    this.isSelected = false;
    this.registrar = true;
  }
  delete(n:number):void{
    console.log(n);
    this.niv_comp_curService.delete(n).subscribe(respone=>console.log('delete success'))
  }
  del(num:number):void{
    console.log(num);
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(num);
        this.niv_comp_curService.delete(num).subscribe(
          response=>{
        this.listarAll()
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )})
      }
      }
      
    )   
}

engineerMijail(n: number) {
  this.mepo = n;
  this.isRegi3 = false;
  this.registrar = true;
}
public listarAll(): void {
  this.niv_comp_curService.getAll().subscribe(
    (data)=>{
    this.niv_comp_cur.data = data['CURSOR_NI_CUR_COM_NOMBRE'];
    console.log(this.planes)}) 
}

}
