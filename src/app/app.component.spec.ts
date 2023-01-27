import { TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { AppComponent } from './app.component';
import { FavoriteButtonComponent, MusicPlayerComponent, MusicPlayerMobileComponent, NavigationBarComponent, NavigationRailComponent, SharedModule } from './shared';
import { IconsService } from './core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconTestingModule,
        SharedModule,
      ],
      declarations: [
        AppComponent,
        NavigationRailComponent,
        NavigationBarComponent,
        MusicPlayerComponent,
        MusicPlayerMobileComponent,
        FavoriteButtonComponent,
      ],
      providers: [
        IconsService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
