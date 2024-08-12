import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureChildComponent } from './feature-child.component';

describe('FeatureChildComponent', () => {
  let component: FeatureChildComponent;
  let fixture: ComponentFixture<FeatureChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
