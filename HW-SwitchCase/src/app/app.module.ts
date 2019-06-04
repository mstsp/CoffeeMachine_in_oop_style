import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  addClass() {
    
  }

}
