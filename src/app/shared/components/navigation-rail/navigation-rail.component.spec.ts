import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';

import { NavigationRailComponent } from './navigation-rail.component';

describe('NavigationRailComponent', () => {
  let component: NavigationRailComponent;
  let fixture: ComponentFixture<NavigationRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [NavigationRailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
