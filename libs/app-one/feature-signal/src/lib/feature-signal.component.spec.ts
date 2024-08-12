import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureSignalComponent } from './feature-signal.component';

describe('FeatureSignalComponent', () => {
  let component: FeatureSignalComponent;
  let fixture: ComponentFixture<FeatureSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
