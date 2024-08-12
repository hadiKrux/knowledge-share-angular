import { Route } from '@angular/router';
import { FeatureFunctionalComponent } from '@ka/feature-functional';
import { FeatureMemoryLeakComponent } from '@ka/feature-memory-leak';
import { FeatureRxjsComponent } from '@ka/feature-rxjs';
import { FeatureSignalComponent } from '@ka/feature-signal';
import { FeatureStoreComponent } from '@ka/feature-store';

export const appRoutes: Route[] = [
  {
    path: 'signal',
    component: FeatureSignalComponent,
  },
  {
    path: 'rxjs',
    component: FeatureRxjsComponent,
  },
  {
    path: 'store',
    component: FeatureStoreComponent,
  },
  {
    path: 'functional-vs-presentational',
    component: FeatureFunctionalComponent,
  },
  {
    path: 'memory-leak',
    component: FeatureMemoryLeakComponent,
  },
];
