import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureMemoryLeakComponent } from './feature-memory-leak.component';

describe('FeatureMemoryLeakComponent', () => {
  let component: FeatureMemoryLeakComponent;
  let fixture: ComponentFixture<FeatureMemoryLeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMemoryLeakComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureMemoryLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
