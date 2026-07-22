import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LLMService {

  private modelLoaded = false;

  constructor() {}

  async loadModel() {
    console.log('Loading Offline LLM...');
    this.modelLoaded = true;
  }

  async generate(prompt: string): Promise<string> {

    if (!this.modelLoaded) {
      await this.loadModel();
    }

    return `Jarvis: ${prompt}`;
  }

}