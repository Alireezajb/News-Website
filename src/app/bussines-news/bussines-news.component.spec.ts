import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesNewsComponent } from './bussines-news.component';

describe('BussinesNewsComponent', () => {
  let component: BussinesNewsComponent;
  let fixture: ComponentFixture<BussinesNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
