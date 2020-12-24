import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Funciones3Service {
  isRegi3:boolean;
  @Output() change:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  mod():void{
    this.isRegi3=false;
    this.change.emit(this.isRegi3);
  }
  reg():void{
    this.isRegi3=true;
    this.change.emit(this.isRegi3);
  }
}
