import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  isRegi:boolean;
  @Output() change:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  mod():void{
    this.isRegi=false;
    this.change.emit(this.isRegi);
  }
  reg():void{
    this.isRegi=true;
    this.change.emit(this.isRegi);
  }
}
