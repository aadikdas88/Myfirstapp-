import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hud',
  standalone: true,
  templateUrl: './hud.page.html',
  styleUrls: ['./hud.page.scss'],
  imports: [
    CommonModule,
    IonContent
  ]
})
export class HudPage implements OnInit {

  time: string = '';
  date: string = '';

  battery: number = 100;
  cpu: number = 10;
  ram: number = 35;
  storage: string = '128 GB';

  network: string = 'Online';
  weather: string = '28°C';
  status: string = 'SYSTEM ONLINE';

  listening: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateClock();

    setInterval(() => {
      this.updateClock();

      this.cpu = Math.floor(Math.random() * 40) + 5;
      this.ram = Math.floor(Math.random() * 60) + 20;
      this.battery = Math.max(0, this.battery - 0.01);

      this.network = navigator.onLine ? 'Online' : 'Offline';
    }, 1000);
  }

  updateClock(): void {
    const now = new Date();

    this.time = now.toLocaleTimeString();

    this.date = now.toDateString();
  }

  toggleListening(): void {
    this.listening = !this.listening;
  }

  goHome(): void {
    this.router.navigate(['/hud']);
  }

  openAI(): void {
    this.router.navigate(['/chat']);
  }

  openApps(): void {
    this.router.navigate(['/apps']);
  }

  openSettings(): void {
    this.router.navigate(['/settings']);
  }

}