import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachNewsComponent } from './teach-news.component';

describe('TeachNewsComponent', () => {
  let component: TeachNewsComponent;
  let fixture: ComponentFixture<TeachNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
