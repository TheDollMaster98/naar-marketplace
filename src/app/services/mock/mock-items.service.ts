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

// * fake chiamata MOCK API: https://www.youtube.com/watch?v=9gK9H9-PQB8
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

  // 1: https://www.fab.com/listings/c8670596-b8c5-4073-901d-fe36cfd5daa8
  // 2: https://www.fab.com/listings/4d0490ce-21fd-45ab-b020-e3700b498c53
  // 3: https://www.fab.com/listings/d595671e-fd2b-448f-ad20-95b2ca9feb9e
  // 4: https://www.fab.com/listings/5bd7045e-b0ae-45a4-ab00-72b2060ab4c5

  private readonly _sideItems = signal<Item[]>([]);
  readonly sideItems = computed(() => this._sideItems());

  private readonly _carouselItems = signal<Item[]>([]);
  readonly carouselItems = computed(() => this._sideItems());

  constructor(private http: HttpClient) {}

  // * RxJS: https://rxjs.dev/guide/observer
  // * https://rxjs.dev/api

  // messo per non richiamare tutti i metodi nella home
  loadAll(): void {
    this.loadItems();
    this.loadSideItems();
    this.loadCarouselItems();
  }

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

  loadSideItems(): void {
    this.http.get<Item[]>('assets/mocks/sideImages.json').subscribe({
      next: (data) => this._sideItems.set(data),
      error: (err) => console.error('Errore nel caricamento dei dati:', err),
    });
  }

  loadCarouselItems(): void {
    this.http.get<Item[]>('assets/mocks/mainCarousel.json').subscribe({
      next: (data) => this._sideItems.set(data),
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
