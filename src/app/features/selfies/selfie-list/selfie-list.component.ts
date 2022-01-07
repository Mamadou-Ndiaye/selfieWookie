import { Component, OnInit } from '@angular/core';

import {Selfie} from './../../../../app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {

  
  logoImage = true;
  
  parent= "un element de title du parent"; 

  lesSelfies : Selfie[]=[
       {
           image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkMAcTyqkzaPco7tQ1P9LCxferjebD949RA&usqp=CAU', 
           titre : 'Un super selfie 1',
           wookie : { nom : 'Chewie', selfie : []}
       } ,
       {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkMAcTyqkzaPco7tQ1P9LCxferjebD949RA&usqp=CAU',
         titre : 'Un Selfie de ouf ! ',
        wookie : { nom : 'Chewie 2', selfie : []}
       } 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
