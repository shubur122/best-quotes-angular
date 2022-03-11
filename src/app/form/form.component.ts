import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  showForm = false;
  isDisabled = true;
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  }
  switchForm() {
    this.showForm = !this.showForm
  }
  checkForm() {
    if (this.quotation.sentence && this.quotation.author) return false;
    else return true;
  }
  addQuotation() {
    if (this.checkForm()) return
    this.newQuotation.emit(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    }
  }
}
