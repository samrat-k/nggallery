import { Component, OnInit } from '@angular/core';
import { SlidsService } from '../slids.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
  providers:[SlidsService]
})
export class HomeComponent implements OnInit {
  public slides:any; 
  
  constructor(private slidsService: SlidsService) { }

  

  // public   slides=[
    
  //   {
  //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg`,
  //      title:`First slide label`,
  //      description:`Ipsum lorem porem dummy text`
  //   },
  //   {
  //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg`,
  //      title:`Second slide label`,
  //      description:`Ipsum lorem porem dummy text`
  //   },
  //   {
  //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg`,
  //      title:`Third slide label`,
  //      description:`Ipsum lorem porem dummy text`
  //   },
  //   {
  //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg`,
  //      title:`Fourth slide label`,
  //      description:`Ipsum lorem porem dummy text`
  //   }
  // ]
  
  ngOnInit() {
   
         this.slidsService.getSlides()
         .subscribe(data => 
        {
          console.log(data);
          this.slides = data;
        });
      
      ;

  }

}
