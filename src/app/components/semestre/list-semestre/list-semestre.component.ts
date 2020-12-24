import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SemestreService } from 'src/app/services/semestre/semestre.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Semestre } from 'src/app/models/semestre/semestre';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-list-semestre',
  templateUrl: './list-semestre.component.html',
  styleUrls: ['./list-semestre.component.css']
})
export class ListSemestreComponent implements OnInit, AfterViewInit {
  semestres: any = new MatTableDataSource();
  registrar: boolean = false;
  editar: boolean = false;
  notDataFound: boolean = false;
  load: boolean;
  isRegi: boolean;
  isSelected: boolean;
  mepo: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['N', 'NOMBRES', 'EDITAR', 'ELIMINAR'];
  constructor(private semestreService: SemestreService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngAfterViewInit() {
    this.semestres.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.listarsemestre();
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  Register(): void {
    this.isRegi = true;
    this.isSelected = false;
    this.registrar = true;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.semestres.filter = filterValue.trim().toLowerCase();
  }
  Editar(): void {
    if (this.editar == false) {
      this.editar = true;
    } else {
      this.editar = false;
    }
  }
  listarsemestre(): void {
    this.semestreService.getSemestres().subscribe(data => this.semestres.data = data['CURSOR_SEMESTRE']);
  }
  delete(n: number): void {
    console.log(n);
    this.semestreService.deleteSemestre(n).subscribe(respone => console.log('delete success'))
  }


  engineerMijail(n: number) {
    this.mepo = n;
    this.isRegi = false;
    this.registrar = true;
  }
  delSemestre(num: number): void {
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
        this.semestreService.deleteSemestre(num).subscribe(
          response => {
            this.listarsemestre()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )
          })
      }
    }

    )
  }

}
