import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared.module';

import { MusicPlayerMobileComponent } from './music-player-mobile.component';

describe('MusicPlayerMobileComponent', () => {
  let component: MusicPlayerMobileComponent;
  let fixture: ComponentFixture<MusicPlayerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [MusicPlayerMobileComponent]
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
