import { Component, OnInit, NgModule } from '@angular/core';
import { MatTabsModule } from "@angular/material/tabs";
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'nxp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    MatTabsModule
  ],
})
export class HeaderComponentModule {}
