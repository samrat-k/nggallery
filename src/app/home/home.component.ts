import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor() { }
  public   slides=[
    
    {
       image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg`,
       title:`First slide label`,
       description:`Ipsum lorem porem dummy text`
    },
    {
       image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg`,
       title:`Second slide label`,
       description:`Ipsum lorem porem dummy text`
    },
    {
       image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg`,
       title:`Third slide label`,
       description:`Ipsum lorem porem dummy text`
    },
    {
       image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg`,
       title:`Fourth slide label`,
       description:`Ipsum lorem porem dummy text`
    }
  ]
  
   
  ngOnInit() {
  }

}
