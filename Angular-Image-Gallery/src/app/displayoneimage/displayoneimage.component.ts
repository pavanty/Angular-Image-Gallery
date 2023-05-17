import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-displayoneimage',
  templateUrl: './displayoneimage.component.html',
  styleUrls: ['./displayoneimage.component.scss'],
})
export class DisplayoneimageComponent implements OnInit {
  catimageid: any;
  getcatimageinfo: any;
  catjsonobject: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.catimageid = params.get('id');

      this.getcatimageinformation();
    });
  }
  getcatimageinformation() {
    this.service.getcatimagebyid(this.catimageid).subscribe((data) => {
      this.catjsonobject = data;
    });
  }
}
