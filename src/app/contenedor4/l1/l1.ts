import { Component } from '@angular/core';

@Component({
  selector: 'app-l1',
  imports: [],
  templateUrl: './l1.html',
  styleUrl: './l1.css',
})
export class L1 {
  isRightPanelActive = false;

  onSignUp() {
    this.isRightPanelActive = true;
  }

  onSignIn() {
    this.isRightPanelActive = false;
  }
}