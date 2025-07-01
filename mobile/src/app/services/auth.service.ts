import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl ='https://api.kelompok47.my.id/api';

  constructor(
    private http: HttpClient, 
    private storage: Storage, 
    private router: Router
  ) { 
    this.storage.create();
  }

  // buat nampilin dashboard hrga
  getRingkasanPesanan() {
    return this.http.get<any>(`${this.apiUrl}/pesanan-makanan/ringkasan`);
  }

  // nampilin data karyawan
  getUsers(): Observable<any> {
  return this.http.get(`${this.apiUrl}/users`);
  }

  // delet karyawan
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/karyawan/${id}`);
  }

  //nampilin karyawan role karyawan
  getKaryawans(): Observable<any> {
    return this.http.get(`${this.apiUrl}/karyawans`);
  }

  // Buat jadwal shift
  createJadwalShift(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/buat-jadwal`, data);
  }

  //nampilin jadwal
  getJadwalShift(params: any = {}) {
    return this.http.get(`${this.apiUrl}/jadwal-shift`, { params });
  }

  //input jumlah pesanan
  tambahPesanan(data: any) {
    const token = localStorage.getItem('token'); // Atau storage.get jika pakai Ionic Storage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/pesanan-makanan`, data, { headers });
  }

  //jumlah yg sudah ambil makanan timestamp 
  getTotalSudahHariIni() {
    return this.http.get<{ tanggal: string; total_sudah: number }>(`${this.apiUrl}/total-absen-sudah`);
  }

  //untuk nampiln history absensi makan yg status sudah sesuai user yg login
  getAbsensiSudahByUser() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };

    return this.http.get<any[]>(`${this.apiUrl}/absensi-sudah`, { headers });
  }

  getJadwalSaya(): Observable<any[]> {
    const token = localStorage.getItem('token'); // Pastikan token disimpan setelah login

    return this.http.get<any[]>(`${this.apiUrl}/jadwal-saya`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  //nampilin pesanan 
  getPesananByTanggal(tanggal: string): Observable<any> {
    const tanggalFormatted = tanggal.split('T')[0]; // pastikan hanya tanggal
    const params = new HttpParams().set('tanggal', tanggalFormatted);
    const url = `${this.apiUrl}/pesanan-makanan`; // tambahkan endpoint-nya
    return this.http.get(url, { params });
  }

  // Mengambil lokasi kantor (lat & long dari backend Laravel)
  getLokasiKantor(): Observable<{ latitude: number; longitude: number }> {
    return this.http.get<{ latitude: number; longitude: number }>(`${this.apiUrl}/lokasi-kantor`);
  }

  
}
