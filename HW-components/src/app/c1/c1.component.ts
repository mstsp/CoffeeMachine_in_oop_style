import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  @Input() someText: string;
  @Output() outputText: EventEmitter <string> = new EventEmitter();
  public title: string;


  constructor() {
  }

  ngOnInit() {
    //console.log(this.someText);
    this.title = this.someText;


  }

  onOutputText(text) {
    //console.log('c1', text)
    this.outputText.emit(text);
  }

}
