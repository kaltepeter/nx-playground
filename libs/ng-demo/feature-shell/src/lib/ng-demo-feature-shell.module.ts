import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponentModule } from "@nx-playground/shared/ui";

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {path: '', component: ShellComponent}
    ]),
    HeaderComponentModule
  ],
  declarations: [ShellComponent],
})
export class NgDemoFeatureShellModule {}
