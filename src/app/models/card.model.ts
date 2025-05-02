export interface Item {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: Category;
  id?: string; // TODO: capire se serve, credo di no essendo un mock
}

// TODO: avrei dovuto farlo anche nei mock per renderlo più realistico per delle fake traduzioni, ma non ci ho pensato
export enum Category {
  ELECTRO = 'Elettronica',
  SUIT = 'Abbigliamento',
  TOYS = 'Giocattoli',
  SPORT = 'Sport',
  GRAPHIC3D = '3D',
  UI = 'UI',
  DESIGN = 'Design',
  GRAPHIC = 'Graphics',
  OTHERS = 'Template',
}
