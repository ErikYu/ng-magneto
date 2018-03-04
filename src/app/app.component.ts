import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  smallVal = 'uuu'
  change() {
      console.log(233123)
  }
  blur() {
      console.log('blur')
  }
  focus() {
      console.log('focus')
  }
}
