import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingEditionDetailComponent } from './printing-edition-detail.component';

describe('PrintingEditionDetailComponent', () => {
  let component: PrintingEditionDetailComponent;
  let fixture: ComponentFixture<PrintingEditionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintingEditionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingEditionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
