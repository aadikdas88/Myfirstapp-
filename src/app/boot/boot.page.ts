import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.page.html',
  styleUrls: ['./boot.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonProgressBar
  ]
})
export class BootPage {

  progress = 0;

  status = "Initializing...";

}