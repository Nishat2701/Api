import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { IUser } from '../Interface/user.interface';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  // updateForm:FormGroup;
  submitted = false;
  updateForm: FormGroup;
  getId: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {
    // get particular id
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    // call api getuser
    this.api.GetUser(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        name: res['name'],
        email: res['email'],
      });
    });
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9. ]+$'), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // get all form control for easy access
  get formData() {
    return this.updateForm.controls;
  }

  ngOnInit(): void {}
// Update User method
  UpdateUser(): any {
    this.submitted = true;
    if (this.updateForm.invalid) {
      return false;
    }else{
    this.api.updateUser(this.getId, this.updateForm.value as IUser).subscribe(() => {
      console.log('Data updated successfully!');
      this.router.navigateByUrl('/user-list');
    });
  }
  }
}
