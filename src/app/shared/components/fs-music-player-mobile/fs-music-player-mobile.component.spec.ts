import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { FavoriteButtonComponent, SharedModule } from '../..';

import { FsMusicPlayerMobileComponent } from './fs-music-player-mobile.component';

describe('FsMusicPlayerMobileComponent', () => {
  let component: FsMusicPlayerMobileComponent;
  let fixture: ComponentFixture<FsMusicPlayerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatIconTestingModule
      ],
      declarations: [
        FsMusicPlayerMobileComponent,
        FavoriteButtonComponent,
        MatIcon
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FsMusicPlayerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
