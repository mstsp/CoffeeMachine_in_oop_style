import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  @Input() someText;
  @Output() outputText: EventEmitter <string> = new EventEmitter();
  public title: string;

  constructor() {
  }

  ngOnInit() {
    //console.log(this.someText);
    this.title = this.someText;

  }

  onOutputText(text) {
   this.outputText.emit(text);
  //  console.log('c2', text);
  }

}
