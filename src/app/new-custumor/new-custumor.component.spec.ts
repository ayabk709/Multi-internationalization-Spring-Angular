import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustumorComponent } from './new-custumor.component';

describe('NewCustumorComponent', () => {
  let component: NewCustumorComponent;
  let fixture: ComponentFixture<NewCustumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCustumorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
