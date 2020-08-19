import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  analog = true;
  constructor(){}
  ngOnInit(){
    

  }

  onClick(){
    this.analog = !this.analog;
    console.log(this.analog);
  }
}
