import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hud',
    pathMatch: 'full',
  },

  {
    path: 'hud',
    loadComponent: () =>
      import('./hud/hud.page').then(m => m.HudPage),
  },

  {
    path: 'chat',
    loadComponent: () =>
      import('./chat/chat.page').then(m => m.ChatPage),
  },

  {
    path: 'apps',
    loadComponent: () =>
      import('./apps/apps.page').then(m => m.AppsPage),
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.page').then(m => m.SettingsPage),
  },
];