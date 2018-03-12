import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class SlidsService {
  public jurl='https://raw.githubusercontent.com/samrat123/ngfileupload/master/slides.json';

  public resdata= {};
  constructor(private http:Http) { }
   
  getSlides():Observable<any>{
    console.log("HELLOOOOOOOOOOOOOOO2");
     return this.http.get(this.jurl)
               .map((res:Response) =>  this.resdata =res.json());
         //    .subscribe(res => this.data = res);;
  //  console.log(this.data);
     // console.log(aa);
     // console.log(this.resdata);
      
     // return this.resdata;
        //  .map(res);
  }


}
