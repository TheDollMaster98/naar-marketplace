import { computed, Pipe, PipeTransform, Signal } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
/**
 * pipe per filtrare gli elementi in base al nome
 * ho provato a convertirla con i signals, ma non sono riuscito
 */
export class FilterPipe implements PipeTransform {
  transform(items: any[], type?: any): any[] {
    // * Se non ci sono elementi, ritorna un array vuoto
    if (!type) return items;
    return items.filter((item) => item.category === type);
  }
}
