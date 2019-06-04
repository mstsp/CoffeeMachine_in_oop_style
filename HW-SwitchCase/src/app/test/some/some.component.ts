import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {
  public color: string = '';
  public toggleClass: boolean = false;

  public arrayUsers: {name: string, age: number}[] = [
    {
      name: 'Test 1',
      age: 20
    },
    {
      name: 'Test 2',
      age: 15
    },
    {
      name: 'Test 3',
      age: 32
    }
  ];

  @Input() textWeight: string | number = 'normal';
  @Input() textClass: string;

  constructor() { }

  ngOnInit() {
  }

  onAddUser(name: string, age: number) {
    const newUser = {
      name: name,
      age: age
    };

    this.arrayUsers.push(newUser);
  }

  onToggle() {
    this.toggleClass = !this.toggleClass;
  }

  onPickColor(color: string) {
    this.color = color;
  }
  

}
