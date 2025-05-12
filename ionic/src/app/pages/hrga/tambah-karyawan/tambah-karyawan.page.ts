import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  standalone:false,
  selector: 'app-tambah-karyawan',
  templateUrl: './tambah-karyawan.page.html',
  styleUrls: ['./tambah-karyawan.page.scss'],
})
export class TambahKaryawanPage implements OnInit {
  form = {
    username: '',
    email: '',
    nama: '',
    password: '',
    role: '',
    tanggal_masuk: ''
  };

  foto: File | null = null;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  onFileChange(event: any) {
    this.foto = event.target.files[0];
  }

  async submit() {
    const formData = new FormData();
    Object.entries(this.form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (this.foto) {
      formData.append('foto', this.foto);
    }

    this.http.post('http://localhost:8000/api/karyawan', formData).subscribe({
      next: async () => {
        const toast = await this.toastCtrl.create({
          message: 'Karyawan berhasil ditambahkan',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.navCtrl.navigateBack('/karyawan');
      },
      error: async () => {
        const toast = await this.toastCtrl.create({
          message: 'Gagal tambah karyawan',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }
}
