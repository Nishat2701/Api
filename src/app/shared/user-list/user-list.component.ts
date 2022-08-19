import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any = [];
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    // get all users data
    this.api.GetUsers().subscribe((res) => {
      console.log(res.results);
      this.users = res.results;
    });
  }
  // delete method
  delete(id: any, i: any) {
    if (window.confirm('Do you want delete' + `${id}` + '?')) {
      // call delete api
      this.api.deleteUser(id).subscribe((res) => {
        this.users.splice(i, 1);
      });
    }
  }
}
