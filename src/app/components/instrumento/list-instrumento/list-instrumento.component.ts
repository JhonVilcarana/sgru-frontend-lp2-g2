import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/models/semestre/semestre';
import { SemestreService } from 'src/app/services/semestre/semestre.service';

@Component({
  selector: 'app-list-instrumento',
  templateUrl: './list-instrumento.component.html',
  styleUrls: ['./list-instrumento.component.css']
})
export class ListInstrumentoComponent implements OnInit {
  selected = 'option2';
  public semestres: Semestre[];

  constructor
  (
    private _semestreSerive:SemestreService,

  ) { }

  ngOnInit(): void {
    this.getSemestres();
  }

  getSemestres(){
    this._semestreSerive.getSemestres().subscribe(
      response =>{
        if(response.semestres){
          this.semestres = response.semestres;
          console.log(this.semestres);
        }
      },
      error =>{

      }
    );
  }

}
