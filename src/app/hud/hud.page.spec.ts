import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HudPage } from './hud.page';

describe('HudPage', () => {
  let component: HudPage;
  let fixture: ComponentFixture<HudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
