import { Component, OnInit } from '@angular/core';
import {Element} from '../element';
import { debug } from 'util';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: Element[] = [];
 
  model = new Element(null, null);

  submitted = false;
  valid = null;
  empty = false;

  onSubmit() {
    this.empty = false;
    if(this.model.name &&  this.model.age){
      this.submitted = true;

      if(0 <= this.model.age &&  this.model.age <= 120){
        this.users.push({name: this.model.name, age: this.model.age});
        this.valid = false;
      }else{
          this.valid = true;
      }
    }else{
      this.empty = true;
    }
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.users); }

}
