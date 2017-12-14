import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'neo-debounce-input',
  template: `
    <nz-input [nzType]="'search'" [nzPlaceHolder]="placeholder" [nzSize]="'large'" [(ngModel)]="inputValue">
  `,
  styles: []
})
export class NeoDebounceInputComponent  {
  @Input() placeholder: string;
  @Input() delay = 300;
  @Output() value = new EventEmitter(false);

  public inputValue: string;

  constructor(private elementRef: ElementRef) {
    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();

      eventStream.subscribe(input => this.value.emit(input));
  }


}
