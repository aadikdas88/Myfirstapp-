import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { AiCoreService } from '../core/ai-core.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent
  ],
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage {

  input = '';

  messages = [
    {
      sender: 'Jarvis',
      text: 'Offline AI Core Online.'
    }
  ];

  constructor(private ai: AiCoreService) {}

  async sendMessage() {

    if (!this.input.trim()) return;

    const userMessage = this.input;

    this.messages.push({
      sender: 'You',
      text: userMessage
    });

    this.input = '';

    const reply = await this.ai.process(userMessage);

    this.messages.push({
      sender: 'Jarvis',
      text: reply
    });

  }

}