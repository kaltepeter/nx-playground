import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HeaderComponentModule } from './header/header.component';

@NgModule({
  imports: [CommonModule, HeaderComponentModule],
  declarations: [],
  exports: [HeaderComponentModule],
})
export class SharedUiModule {}
