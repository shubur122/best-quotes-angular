import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() clickButton = new EventEmitter<void>();
  @Input() disabled!: boolean;
  @Input() customClasses!: string;
}
