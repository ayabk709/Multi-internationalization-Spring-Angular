import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumoraccountComponent } from './custumoraccount.component';

describe('CustumoraccountComponent', () => {
  let component: CustumoraccountComponent;
  let fixture: ComponentFixture<CustumoraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustumoraccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustumoraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
