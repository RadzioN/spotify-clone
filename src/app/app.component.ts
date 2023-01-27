import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private iconsService: IconsService) {
  }

  ngOnInit() {
    this.iconsService.registerIcons();
  }

}
