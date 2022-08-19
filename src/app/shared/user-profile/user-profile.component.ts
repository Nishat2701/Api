import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  getId: any;
  users: any = [];

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    //  get id
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    // get api for single user
    this.api.GetUser(this.getId).subscribe((res) => {
      this.users = res;
    });
  }

  ngOnInit(): void {}
}
