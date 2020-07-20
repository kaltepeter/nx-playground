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
            import('@nx-playground/ng-demo/feature-shell').then(
              (module) => module.NgDemoFeatureShellModule
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
