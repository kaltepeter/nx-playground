import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'ng-demo',
          loadChildren: () =>
            import('@nx-playground/feature-shell').then(
              (module) => module.FeatureShellModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
})
export class AppModule {
  ngDoBootstrap(app) {
    console.log('in ngDoBootstrap', app)
   }
}
