import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//const layout={'fulllayout','sidebar-layout'};
export class AppComponent {
  title = 'app';
  
  private activeLayout='fulllayout';
    constructor() { }

    ngOnInit() {
    }   

}
