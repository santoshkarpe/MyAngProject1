import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';

import { AuthService } from './auth.service'


@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor(@Inject(AuthService) private auth: AuthService, 
                    @Inject(Router) private router: Router) {

  }
  ngOnInit() {
    let firstName = new FormControl(this.auth.currentUser.firstName);
    let lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      formFirstName: firstName,
      formLastName: lastName
    })

  }

  saveProfile(formValues) {
    this.auth.updateCurrentUser(formValues.formFirstName,formValues.formLastName)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])

  }
       
}