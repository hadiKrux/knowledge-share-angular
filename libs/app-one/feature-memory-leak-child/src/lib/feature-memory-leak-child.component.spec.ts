import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureMemoryLeakChildComponent } from './feature-memory-leak-child.component';

describe('FeatureMemoryLeakChildComponent', () => {
  let component: FeatureMemoryLeakChildComponent;
  let fixture: ComponentFixture<FeatureMemoryLeakChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMemoryLeakChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureMemoryLeakChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
