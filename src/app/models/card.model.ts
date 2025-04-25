export interface Item {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: Category;
  id?: string; // TODO: capire se serve, credo di no essendo un mock
}

export type Category =
  | 'Elettronica'
  | 'Abbigliamento'
  | 'Giocattoli'
  | 'Sport'
  | '3D'
  | 'UI'
  | 'Design'
  | 'Graphics'
  | 'Template';
