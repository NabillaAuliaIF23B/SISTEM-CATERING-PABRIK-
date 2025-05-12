import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-profile-koki',
  templateUrl: './profile-koki.page.html',
  styleUrls: ['./profile-koki.page.scss'],
})
export class ProfileKokiPage implements OnInit {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
