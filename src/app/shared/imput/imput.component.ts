import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';

import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-imput-container',
  templateUrl: './imput.component.html'
})
export class ImputComponent implements OnInit, AfterContentInit {

  @Input() imput: any

  @Input() label: string
  @Input() errorMessage: string

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.imput = this.model
    if (this.imput === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }

  hasSuccess(): boolean {
    return this.imput.valid && (this.imput.dirty || this.imput.touched)
  }

  hasError(): boolean {
    return this.imput.invalid && (this.imput.dirty || this.imput.touched)
  }

}
