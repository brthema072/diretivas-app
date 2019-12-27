import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: String="";
  address: String="";
  phone: String="";
  city: String="";
  age: number = 0;

  cities = [
    {name:"São Paulo", state:"SP"},
    {name:"Porto Alegre", state:"RS"},
    {name:"Curitiba", state:"PR"},
    {name:"Rio de Janeiro", state:"Rj"}
  ];

  clients = [];

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        phone: this.phone,
        age: this.age
      }
    );

    console.log(this.clients);
    
    this.cancel();
  }

  cancel(){
    this.name="";
    this.address="";
    this.city="";
    this.phone="";
    this.age=0;
  }
}
