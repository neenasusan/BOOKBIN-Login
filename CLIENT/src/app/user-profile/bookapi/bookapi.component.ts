import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookapiService} from '../../shared/bookapi.service';
import {Router} from '@angular/router';
import {Books} from '../../shared/bookapi.model';


@Component({
  selector: 'app-bookapi',
  templateUrl: './bookapi.component.html',
  styleUrls: ['./bookapi.component.css'],
  providers: [BookapiService]
})
export class BookapiComponent implements OnInit {

  constructor(private bookapiservice: BookapiService) { }

  listbooks:Books[];
  

  ngOnInit() {

  }

  onSubmit(form:NgForm){
  this.bookapiservice.getbooks()
    .subscribe(
       data=>{
        this.listbooks = data;
       }

    );
  }

}
