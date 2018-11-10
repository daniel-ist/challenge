import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private contacts:  Array<any> = [];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getContacts();
  }

  public  getContacts(){
    this.apiService.getUsers().subscribe((data: any) => {
        this.contacts  =  data;
        console.log(data);
    });
  }
}
