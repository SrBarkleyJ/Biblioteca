import { Component } from '@angular/core';

@Component({
  selector: 'app-l2',
  imports: [],
  templateUrl: './l2.html',
  styleUrl: './l2.css',
})
export class L2 {
  isRightPanelActive = false;

  togglePanel() {
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}

