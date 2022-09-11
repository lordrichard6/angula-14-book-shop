import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  isLoading = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('credentials dont match');
      })
      .finally(() => (this.isLoading = false));
    console.log(form);
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;

    this.isLoading = true;
    if (form.password !== form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
    console.log(form);
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
