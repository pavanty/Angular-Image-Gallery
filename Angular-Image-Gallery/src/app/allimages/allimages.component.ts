import { Component, NgModule, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allimages',
  templateUrl: './allimages.component.html',
  styleUrls: ['./allimages.component.scss'],
})
export class AllimagesComponent implements OnInit {
  catjsonobjects: any[] = [{}];
  totallength: any;
  page: number = 1;
  loader = true;
  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getallimages();
  }
  getallimages() {
    this.service.getallcatimage().subscribe((data) => {
      this.catjsonobjects = data;

      setTimeout(() => {
        this.loader = false;
      }, 1000);
    });
  }
}
