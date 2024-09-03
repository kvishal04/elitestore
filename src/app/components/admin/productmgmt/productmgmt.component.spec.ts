import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmgmtComponent } from './productmgmt.component';

describe('ProductmgmtComponent', () => {
  let component: ProductmgmtComponent;
  let fixture: ComponentFixture<ProductmgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductmgmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
