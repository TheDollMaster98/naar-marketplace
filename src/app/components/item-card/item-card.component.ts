import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  // TODO: da cambiare in required se serve + creare interfaccia
  // title = input.required<string>();
  title = input<string>('title');
  description = input<string>('description');
  price = input<number>(0);
  imageUrl = input<string>('assets/placeholder-image.webp');
}
