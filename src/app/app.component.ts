import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'fudge';
  isScroll: Boolean = false;

  scrollContainer(){
    console.log(this.isScroll)
    this.isScroll = !this.isScroll;
  }

  onInit(){
    this.scrollContainer();
  }
}
