import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hello World!';
  newTitle: string = '';

  onOutputText(newTitle) {
    this.newTitle = newTitle;
    console.log('app', newTitle)
    console.log('appnewTitle', this.newTitle)

  }

}
