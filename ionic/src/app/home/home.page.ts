import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        const role = res.user.role;
        if (role === 'karyawan') this.router.navigate(['/dashboard-karyawan']);
        else if (role === 'koki') this.router.navigate(['/dashboard-koki']);
        else if (role === 'hrga') this.router.navigate(['/dashboard-hrga']);
      },
      error: () => alert('Username atau password salah')
    });
  }

}
