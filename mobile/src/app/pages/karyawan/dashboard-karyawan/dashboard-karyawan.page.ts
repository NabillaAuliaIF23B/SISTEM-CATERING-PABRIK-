import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import * as QRCode from 'qrcode';
import { Capacitor } from '@capacitor/core';

// Import plugin secara manual (jika belum pakai plugin registry)
declare var window: any;

@Component({
  standalone: false,
  selector: 'app-dashboard-karyawan',
  templateUrl: './dashboard-karyawan.page.html',
  styleUrls: ['./dashboard-karyawan.page.scss'],
})
export class DashboardKaryawanPage implements OnInit {
  qrString: string = '';
  private timerSub!: Subscription;

  @ViewChild('qrCanvas', { static: false }) qrCanvas!: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: Storage
  ) {}

  removeFocusBeforeNavigate() {
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
  }

  async ngOnInit() {
    await this.storage.create();

    // Aktifkan anti-screenshot di platform Android/iOS
    if (Capacitor.getPlatform() === 'android' || Capacitor.getPlatform() === 'ios') {
      try {
        const PrivacyScreen = window?.PrivacyScreen;
        if (PrivacyScreen && PrivacyScreen.enable) {
          await PrivacyScreen.enable();
        }
      } catch (err) {
        console.warn('PrivacyScreen plugin tidak tersedia atau gagal diaktifkan:', err);
      }
    }

    // Muat QR pertama kali dan setiap 15 detik
    this.timerSub = interval(15000).subscribe(() => {
      this.loadQr();
    });
    this.loadQr();
  }

  async loadQr() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token tidak ditemukan.');
      return;
    }

    this.http.get(`${environment.apiUrl}/qr-data`, {
      headers: { Authorization: `Bearer ${token}` },
    }).subscribe(
      async (res: any) => {
        if (res && res.data) {
          this.qrString = JSON.stringify(res.data);

          if (this.qrCanvas) {
            await QRCode.toCanvas(this.qrCanvas.nativeElement, this.qrString, {
              width: 256,
              errorCorrectionLevel: 'M',
            });
          }
        } else {
          console.warn('Respon tidak valid:', res);
          this.qrString = '';
        }
      },
      (error) => {
        console.error('Gagal ambil QR:', error);
        this.qrString = '';
      }
    );
  }

  async ionViewDidLeave() {
    // Matikan anti-screenshot saat keluar halaman (opsional)
    if (Capacitor.getPlatform() === 'android' || Capacitor.getPlatform() === 'ios') {
      try {
        const PrivacyScreen = window?.PrivacyScreen;
        if (PrivacyScreen && PrivacyScreen.disable) {
          await PrivacyScreen.disable();
        }
      } catch (err) {
        console.warn('Gagal menonaktifkan PrivacyScreen:', err);
      }
    }
  }
}
