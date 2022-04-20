import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorBannerComponent } from './actor-banner.component';

describe('ActorBannerComponent', () => {
  let component: ActorBannerComponent;
  let fixture: ComponentFixture<ActorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
