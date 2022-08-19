import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { IUser } from '../Interface/user.interface';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  submitted = false;
  // options
  Roles = ['user', 'admin', 'super admin', 'guest'];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {}
  userForm = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9. ]+$'),
        Validators.minLength(3),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(9),
        Validators.pattern('^[a-zA-Z0-9]+$'),
      ],
    ],
    role: ['', [Validators.required]],
  });

  // convenience getter for easy access to form fields
  get formData() {
    return this.userForm.controls;
  }
  //  add user function
  AddUser() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return false;
    } else {
      // call Api
      this.api.AddUser(this.userForm.value as IUser).subscribe((data: any) => {
        console.log('Data added successfully!');
        console.log(data);
        this.router.navigateByUrl('/user-list');
      });
    }
    return;
  }

  ngOnInit(): void {}
}
