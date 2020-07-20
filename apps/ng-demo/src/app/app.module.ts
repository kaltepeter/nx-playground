import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'ng-demo-features',
          loadChildren: () =>
            import('@nx-playground/ng-demo/features').then(
              (module) => module.NgDemoFeaturesModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  bootstrap: [],
})
export class AppModule {}
