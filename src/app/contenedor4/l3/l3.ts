import { Component } from '@angular/core';

@Component({
  selector: 'app-l3',
  templateUrl: './l3.html',
  styleUrls: ['./l3.css'] // ← El mismo CSS de arriba
})
export class L3 {
  isLoginActive = false;

  switchToLogin() {
    this.isLoginActive = true;
  }

  switchToSignup() {
    this.isLoginActive = false;
  }
}