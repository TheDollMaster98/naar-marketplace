import { Component, ElementRef, ViewChild, input } from '@angular/core';
import { ItemCardComponent } from '../../item-card/item-card.component';
import { Item, Category } from '../../../models/card.model';
import { FilterPipe } from '../../../shared/pipes/filter/filter.pipe';
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';
import {
  caretAltLeftIcon,
  caretAltRightIcon,
  SVGIcon,
} from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-carousel-scroll',
  standalone: true,
  imports: [ItemCardComponent, FilterPipe, KENDO_BUTTON],
  templateUrl: './carousel-scroll.component.html',
  styleUrl: './carousel-scroll.component.css',
})
export class CarouselScrollComponent {
  items = input<Item[]>([]);
  genre = input<Category>();

  public icons = { leftArrow: caretAltLeftIcon };

  // non so perché le icone non funzionano se non le dichiaro così:
  public arrowLeft: SVGIcon = caretAltLeftIcon;
  public arrowRight: SVGIcon = caretAltRightIcon;

  // ho usato ViewChild per prendere il riferimento al div che contiene gli elementi da scorrere
  @ViewChild('scrollContainer', { static: true })
  scrollContainer!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  }
}
