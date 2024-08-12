import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePresentationalComponent } from './feature-presentational.component';

describe('FeaturePresentationalComponent', () => {
  let component: FeaturePresentationalComponent;
  let fixture: ComponentFixture<FeaturePresentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePresentationalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
