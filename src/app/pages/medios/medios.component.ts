import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medios',
  templateUrl: './medios.component.html',
  styleUrls: ['./medios.component.css']
})
export class MediosComponent {
  constructor(private router:Router) {
  }
  goHome() {
    this.router.navigate(['/home']);
  }
}
