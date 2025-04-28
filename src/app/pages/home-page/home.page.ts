import { MockItemsService } from '../../services/mock/mock-items.service';
import { Component, inject } from '@angular/core';
import { ItemCardComponent } from '../../components/item-card/item-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  // * Ho usato inject per il service dopo essermi documentato su come usare i signal in angular (vedi README per le fonti).
  // * in pratica: miglior riutilizzabilità, lettura più semplice e più chiara, e una migliore gestione dello stato.

  // * questa parte l'ho copiata da un esempio di un componente che ho visto al lavoro, però:
  // * uso inject() per creare una proprietà locale normale, leggibile come una variabile del componente, senza usare il constructor
  // * Più chiaro, diretto e compatto rispetto alla classica dependency injection.

  // ! Non usare const quando si usa inject, altrimenti non si può usare il signal.
  private readonly mockService = inject(MockItemsService);
  readonly items = this.mockService.items; // è signal<Item[]>

  // Carico i dati al caricamento del componente
  ngOnInit(): void {
    this.mockService.loadItems();
    console.log('Items:', this.items());
  }
}
