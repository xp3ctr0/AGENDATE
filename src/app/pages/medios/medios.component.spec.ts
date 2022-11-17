import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosComponent } from './medios.component';

describe('MediosComponent', () => {
  let component: MediosComponent;
  let fixture: ComponentFixture<MediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
