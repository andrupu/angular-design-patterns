import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarAccountMenuComponent } from './app-bar-account-menu.component';

describe('AppBarAccountMenuComponent', () => {
  let component: AppBarAccountMenuComponent;
  let fixture: ComponentFixture<AppBarAccountMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarAccountMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarAccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
