import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  @Input() someText;
  @Output() outputText: EventEmitter <string> = new EventEmitter();
  public title: string;
  
  constructor() {
  }

  ngOnInit() {
  //  console.log(this.someText);
    this.title = this.someText;
  }

  onReturnText() {
    this.someText = this.someText + "Changed";
    this.outputText.emit(this.someText);
  }
}
