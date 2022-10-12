import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor( private myapi:ApiService) {this.putPassengerData() }
  passengerData:any=[]
  putPassengerData=()=>{
    this.myapi.getPassengerData().subscribe(
      (data)=>{
        this.passengerData=data
      }
    )
    
  }
  
  

  ngOnInit(): void {
  }

}
