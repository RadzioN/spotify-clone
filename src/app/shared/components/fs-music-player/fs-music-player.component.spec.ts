import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { FavoriteButtonComponent, SharedModule } from '../..';

import { FsMusicPlayerComponent } from './fs-music-player.component';

describe('FsMusicPlayerComponent', () => {
  let component: FsMusicPlayerComponent;
  let fixture: ComponentFixture<FsMusicPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatIconTestingModule
      ],
      declarations: [
        FsMusicPlayerComponent,
        FavoriteButtonComponent,
        MatIcon
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FsMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
