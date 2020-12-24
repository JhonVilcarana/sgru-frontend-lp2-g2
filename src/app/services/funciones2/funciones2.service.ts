import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Funciones2Service {
  isRegi2:boolean;
  @Output() change:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  mod():void{
    this.isRegi2=false;
    this.change.emit(this.isRegi2);
  }
  reg():void{
    this.isRegi2=true;
    this.change.emit(this.isRegi2);
  }
}
