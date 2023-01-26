import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {

  @Input() size: string = 'small';
  @Input() isFavorite: boolean = false;
  @Output() clickedFavorite = new EventEmitter();

  favorite() {
    this.clickedFavorite.emit();
  }

}
