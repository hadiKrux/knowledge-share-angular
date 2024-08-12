import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureFunctionalComponent } from './feature-functional.component';

describe('FeatureFunctionalComponent', () => {
  let component: FeatureFunctionalComponent;
  let fixture: ComponentFixture<FeatureFunctionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFunctionalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
