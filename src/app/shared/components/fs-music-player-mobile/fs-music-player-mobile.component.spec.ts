import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
        MatIconTestingModule,
        MatDialogModule,
      ],
      declarations: [
        FsMusicPlayerMobileComponent,
        FavoriteButtonComponent,
        MatIcon
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
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
