import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {
  time;
  today;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const d = new Date();
      const h= d.getHours()
      const m = d.getMinutes()
      const s = d.getSeconds()
      
      
      this.time = h +":" + m + ":" + s
      
      this.today = new Date().toLocaleDateString('en-GB', {  
        day : 'numeric',
        month : 'short',
        year : 'numeric'
      })
    },1000);
  }

}
