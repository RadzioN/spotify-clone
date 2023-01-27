import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { FavoriteButtonComponent } from '..';
import { SharedModule } from '../../shared.module';

import { MusicPlayerMobileComponent } from './music-player-mobile.component';

describe('MusicPlayerMobileComponent', () => {
  let component: MusicPlayerMobileComponent;
  let fixture: ComponentFixture<MusicPlayerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatIconTestingModule
      ],
      declarations: [
        FavoriteButtonComponent,
        MusicPlayerMobileComponent,
        MatIcon
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MusicPlayerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
