import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    FormsModule
  ],
})
export class HomePage {

  username = '';
  password = '';

  constructor(private router: Router) {
    addIcons({
      personOutline,
      lockClosedOutline
    });
  }

  login() {
    this.router.navigate(['/dashboard']);
  }

}