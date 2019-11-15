import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  isLoading = false;
  isSignInMode = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  onAuthFormSubmitted(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    authForm.reset();

    // TODO
    const { email, password } = authForm.value;
    if (this.isSignInMode) {
      // sign in call
    } else {
      // sign up call
    }
  }

  onAuthModeToggled() {
    this.isSignInMode = !this.isSignInMode;
  }

  onAuthRequested() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Logging in...'
      })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.router.navigateByUrl('/events/tabs/discover');
          this.isLoading = false;
          loadingEl.dismiss();
        }, 1500);
      });
  }
}
