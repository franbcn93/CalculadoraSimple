import { Component, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
 }

  title = 'Mini Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void {
    this.resultado= this.numero1 + this.numero2
  }
  restar():void {
    this.resultado= this.numero1 - this.numero2
  }
}
