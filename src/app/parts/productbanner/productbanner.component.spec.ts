import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbannerComponent } from './productbanner.component';

describe('ProductbannerComponent', () => {
  let component: ProductbannerComponent;
  let fixture: ComponentFixture<ProductbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
