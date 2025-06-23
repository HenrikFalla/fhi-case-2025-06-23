import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkjemaComponent } from './skjema.component';

describe('SkjemaComponent', () => {
  let component: SkjemaComponent;
  let fixture: ComponentFixture<SkjemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkjemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkjemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
