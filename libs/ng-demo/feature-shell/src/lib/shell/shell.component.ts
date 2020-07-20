import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngd-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  links = ['link 1', 'link 2', 'link 3']

  constructor() { }

  ngOnInit(): void {
  }

}
