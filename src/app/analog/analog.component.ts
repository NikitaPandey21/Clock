import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.css']
})
export class AnalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const HourHand = document.getElementById('HourHand')
    const MinuteHand = document.getElementById('MinuteHand')
    const SecondHand = document.getElementById('SecondHand')

    
    setInterval(() => {
      const d = new Date();
      const h= d.getHours()
      const m = d.getMinutes()
      const s = d.getSeconds()
      
      const hourRotation = 30*h + 0.5*m
      const minuteRotation = 6*m
      const secondRotation = 6*s
    
      HourHand.style.transform = `rotate(${hourRotation}deg)` 
      MinuteHand.style.transform = `rotate(${minuteRotation}deg)` 
      SecondHand.style.transform = `rotate(${secondRotation}deg)` 

    },1000);
  }

}
