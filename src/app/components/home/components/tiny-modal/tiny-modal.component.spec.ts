import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyModalComponent } from './tiny-modal.component';

describe('TinyModalComponent', () => {
  let component: TinyModalComponent;
  let fixture: ComponentFixture<TinyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
