import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-votelist',
  templateUrl: './votelist.component.html',
  styleUrls: ['./votelist.component.css']
})
export class VotelistComponent {
  @Input() quotes!: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>()

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({ quotation, value })
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}