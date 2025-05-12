import { Component, OnInit } from '@angular/core';
//import { ApiurlService } from 'src/app/api/apiurl.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
//import { environment } from 'src/environments/environment.prod';



@Component({
  standalone:false,
  selector: 'app-data-karyawan',
  templateUrl: './data-karyawan.page.html',
  styleUrls: ['./data-karyawan.page.scss'],
})
export class DataKaryawanPage implements OnInit {

  users: any[] = [];
  constructor(
    private navCtrl: NavController,
    //private apiurlService :ApiurlService,
    private http: HttpClient
  ) { }

  

  goToTambah() {
    this.navCtrl.navigateForward('/tambah-karyawan');
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:8000/api/users').subscribe((res: any) => {
      this.users = res;
    });
  }

  editUser(user: any) {
    console.log('Edit user', user);
    // open modal or redirect to edit page
  }

  messageUser(user: any) {
    console.log('Message user', user);
    // messaging logic
  }

  deleteUser(id: number) {
    this.http.delete(`http://localhost:8000/api/users/${id}`).subscribe(() => {
      this.getUsers(); // Refresh
    });
  }
}
