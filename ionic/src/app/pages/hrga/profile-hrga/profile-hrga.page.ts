import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-profile-hrga',
  templateUrl: './profile-hrga.page.html',
  styleUrls: ['./profile-hrga.page.scss'],
})
export class ProfileHrgaPage implements OnInit {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
