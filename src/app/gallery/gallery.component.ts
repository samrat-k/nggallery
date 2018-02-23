import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  public videoList=[
    {
      title:` Sea  `,
      ytcode:"QX4j_zHAlw8",
      description:` Calming Sea - Relaxing 2 Hour - Birds Singing `
    }
    ,
    {
      title:`  14 Roads  `,
      ytcode:"uq7mztW1knU",
      description:` 14 Roads You Would Never Want to Drive On`
    },
    {
      title:"title 2",
      ytcode:"uq7mztW1knU",
      description:"description 2"
    },
    {
      title:"title 3",
      ytcode:"qPhVZExcGXg",
      description:"description"
    },
     {
      title:"ISRO",
      ytcode:"wR8Tbt8hetc",
      description:"ISRO to launch 31 satellites on January 10, 2018"
    },
    {
      title:"title 4",
      ytcode:"z4V5PYO9wWw",
      description:"description"
    },
     {
      title:"Shuttle Atlantis ",
      ytcode:"5KygwcZ545U",
      description:"Shuttle Atlantis STS-132 - Amazing Shuttle Launch Experience"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  getUrl(urlstr)
  {
     // return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+urlstr);
     return 'https://www.youtube.com/embed/'+urlstr;
  }
}
