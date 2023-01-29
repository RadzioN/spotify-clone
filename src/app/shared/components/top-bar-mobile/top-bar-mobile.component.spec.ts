import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarMobileComponent } from './top-bar-mobile.component';

describe('TopBarMobileComponent', () => {
  let component: TopBarMobileComponent;
  let fixture: ComponentFixture<TopBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
