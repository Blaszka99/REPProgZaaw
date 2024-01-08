// logowanie.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogowanieComponent],
    });
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in', () => {
    // Dodaj testy dla funkcji logowania
  });
});
