import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
 

  private users:  Array<any> = [];


  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getContacts();
  }

  public  getContacts(){
    this.apiService.getUsers().subscribe((data: any) => {
        this.users  =  data;
        console.log(data);
    });
  }

  p: number = 1;

}

  