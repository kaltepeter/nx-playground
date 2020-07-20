import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

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
  bootstrap: [AppComponent]
})
export class AppModule {
}
