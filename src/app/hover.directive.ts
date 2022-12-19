import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';

@Directive({
  selector: '[digiplusAppHover]'
})
export class HoverDirective implements OnInit{

  //color: string ='red';
// @Input() color: string='red';
@Input() digiplusAppHover: string='red';
  // constructor(private element: ElementRef) { console.log(this.element.nativeElement);}
  // ngOnInit(): void {
  //   //throw new Error('Method not implemented.');
  //   this.element.nativeElement.style.backgroundColor = this.color;
  // }

  // constructor(private element: ElementRef, @inject(DOCUMENT) private document: Document) 
  // { console.log(this.element.nativeElement);}
  // ngOnInit(): void {
  //   //throw new Error('Method not implemented.');
  //   this.element.nativeElement.style.backgroundColor = this.color;
  //   //this.document.getElementById
  //   this.element.nativeElement.style.backgroundColor = this.color;

  // }
  constructor(private element: ElementRef, private renderer: Renderer2) 
  { console.log(this.element.nativeElement);}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.element.nativeElement.style.backgroundColor = this.color;
    //this.document.getElementById
    this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element
      .nativeElement
      ,'backgroundColor'
      ,this.digiplusAppHover
    );

  }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element
      .nativeElement
      ,'backgroundColor'
      ,'green'
    );
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element
      .nativeElement
      ,'backgroundColor'
      ,'white'
    );
  }
}
