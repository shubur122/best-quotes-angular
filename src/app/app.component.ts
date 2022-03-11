import { Component, EventEmitter, Output } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Quotation[] = QUOTES;
  @Output() disable = new EventEmitter<boolean>()
  addVote(quotation: Quotation, value: number) {
    quotation.votes += value
    this.disable.emit(true)
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0).sort((a, b) => b.votes - a.votes)
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0).sort((a, b) => a.votes - b.votes)
  }
  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation)
  }
}
