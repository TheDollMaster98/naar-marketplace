import { computed, Injectable, signal } from '@angular/core';
import { Item } from '../../models/card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

/**
ci ho messo ore per capirlo, ma credo di aver capito come crearlo
[
  '{{repeat(20)}}',
  {
    title: '{{company()}}',
    description: '{{lorem(1, "sentences")}}',
    price: '{{floating(10, 1000, 2)}}',
    imageUrl: 'assets/placeholder-image.webp',
    category: '{{random("Elettronica", "Abbigliamento", "Giocattoli", "Sport", "3D", "UI", "Design", "Graphics", "Template")}}'
  }
]


https://json-generator.com
 */
export class MockItemsService {
  // ! Ho messo private e readonly per evitare di modificare la lista di items dall'esterno del servizio.
  // ! Per modificare la lista di items usare il metodo addItem.
  // private readonly _items = signal<Item[]>([
  //   {
  //     title: 'Item 1',
  //     description: 'Descrizione prodotto 1',
  //     price: 104,
  //     imageUrl: 'assets/placeholder-image.webp',
  //     category: 'Elettronica',
  //   },
  //   {
  //     title: 'Item 2',
  //     description: 'Descrizione prodotto 2',
  //     price: 49.99,
  //     imageUrl: 'assets/placeholder-image.webp',
  //     category: 'Abbigliamento',
  //   },
  //   {
  //     title: 'Item 3',
  //     description: 'Descrizione prodotto 3',
  //     price: 75.55,
  //     imageUrl: 'assets/placeholder-image.webp',
  //     category: 'Giocattoli',
  //   },
  // ]);

  // items = this._items.asReadonly();

  private readonly _items = signal<Item[]>([]);
  readonly items = computed(() => this._items());

  constructor(private http: HttpClient) {}

  /**
   * Carica gli items del JSON e li memorizza in un signal
   * @param url URL della chiamata mockata
   */
  loadItems(): void {
    this.http.get<Item[]>('assets/mocks/items.json').subscribe({
      next: (data) => this._items.set(data),
      error: (err) => console.error('Errore nel caricamento dei dati:', err),
    });
  }

  /**
   * @param newItem Nuovo item da aggiungere alla lista usando signal
   */
  addItem(newItem: Item) {
    this._items.update((items) => [...items, newItem]);
  }
}
