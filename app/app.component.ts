import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div class="container" style="width: 80%">
  <navbarHeader></navbarHeader>
  <router-outlet></router-outlet></div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    
}
