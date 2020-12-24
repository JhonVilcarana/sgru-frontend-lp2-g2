import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Niv_comp } from 'src/app/models/niv_comp/niv_comp';
import { ActivatedRoute, Router } from '@angular/router';
import { NivCompService } from 'src/app/services/niv_comp/niv-comp.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-niv-comp',
  templateUrl: './list-niv-comp.component.html',
  styleUrls: ['./list-niv-comp.component.css']
})
export class ListNivCompComponent implements OnInit, AfterViewInit {
  isSelected: boolean = false;
  nivcomp: any = new MatTableDataSource();
  registrar: boolean = false;
  editar: boolean = false;
  notDataFound: boolean = false;
  load: boolean;
  isRegi2: boolean;
  mepo: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['N','COMPETENCIA','NIVEL','EDITAR','ELIMINAR'];
  constructor(  private niv_compService:NivCompService, private router:Router, private activatedRoute:ActivatedRoute) {
  
   }
   ngAfterViewInit() {
    this.nivcomp.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.nivcomp.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.listarAll();
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  engineerMijail(n: number) {
    this.mepo = n;
    this.isRegi2 = false;
    this.registrar = true;
  }
  Register(): void {
    this.isRegi2 = true;
    this.isSelected = false;
    this.registrar = true;
  }
  Editar(): void {
    if (this.editar == false) {
      this.editar = true;
    } else {
      this.editar = false;
    }
  }
  delete(n:number):void{
    console.log(n);
    this.niv_compService.delete(n).subscribe(respone=>console.log('delete success'))
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
        this.niv_compService.delete(num).subscribe(
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


public listarAll(): void {
  this.niv_compService.getAll().subscribe(
    (data)=>{
    this.nivcomp.data = data['CURSOR_NICOM_NOMBRE'];
    console.log(this.nivcomp)}) 
}
}
