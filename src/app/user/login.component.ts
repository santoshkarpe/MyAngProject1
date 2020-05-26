import { Component, Inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl : './login.component.html'

})

export class LoginComponent {
  
  constructor(@Inject(AuthService) private authService: AuthService,
      @Inject(Router) private router: Router) {

  }

  login(formValues) {
    //console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}