import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-ramana-transport-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  @Input() block = false;
  @Input() text = 'Loading...';

  ngOnInit(): void {}
}
