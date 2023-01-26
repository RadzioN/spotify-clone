import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteButtonComponent } from '..';
import { SharedModule } from '../../shared.module';

import { MusicPlayerComponent } from './music-player.component';

describe('MusicPlayerComponent', () => {
  let component: MusicPlayerComponent;
  let fixture: ComponentFixture<MusicPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        FavoriteButtonComponent,
        MusicPlayerComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
