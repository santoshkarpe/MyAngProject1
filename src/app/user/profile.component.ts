import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

import { AuthService } from './auth.service'


@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color:#E05C65; padding-left:10px; }
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999;}
  
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(@Inject(AuthService) private auth: AuthService, 
                    @Inject(Router) private router: Router) {

  }
  ngOnInit() {
    this.profileForm = new FormGroup({
      firstNameFrom: this.firstName,
      lastNameForm: this.lastName
    })

    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required,
      Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstNameFrom,formValues.lastNameForm)
          .subscribe( () => {
            console.log('Profile Saved');
          });
      //this.router.navigate(['events'])
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  cancel() {
    this.router.navigate(['events'])

  }
       
}