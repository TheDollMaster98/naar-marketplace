import { Injectable, signal } from '@angular/core';
import { Item } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class MockItemsService {
  // ! Ho messo private e readonly per evitare di modificare la lista di items dall'esterno del servizio.
  // ! Per modificare la lista di items usare il metodo addItem.
  private readonly _items = signal<Item[]>([
    {
      title: 'Item 1',
      description: 'Descrizione prodotto 1',
      price: 104,
      imageUrl: 'assets/placeholder-image.webp',
    },
    {
      title: 'Item 2',
      description: 'Descrizione prodotto 2',
      price: 49.99,
      imageUrl: 'assets/placeholder-image.webp',
    },
    {
      title: 'Item 3',
      description: 'Descrizione prodotto 3',
      price: 75.55,
      imageUrl: 'assets/placeholder-image.webp',
    },
  ]);

  items = this._items.asReadonly();

  /**
   * @param newItem Nuovo item da aggiungere alla lista usando signal
   */
  addItem(newItem: Item) {
    this._items.update((items) => [...items, newItem]);
  }
}
