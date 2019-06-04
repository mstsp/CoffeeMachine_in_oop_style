import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';

@NgModule({
  declarations: [SomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SomeComponent
  ]
})
export class TestModule { }
