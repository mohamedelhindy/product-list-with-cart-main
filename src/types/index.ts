export interface DessertImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Dessert {
  id: number;
  name: string;
  caption: string;
  price: number;
  image: DessertImage;
}

export interface Cart extends Dessert {
  quantity: number;
}
