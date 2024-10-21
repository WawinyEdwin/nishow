export type Product = {
  id: number;
  logo: string;
  name: string;
  short_description: string;
  long_description: string;
  link: string;
  category:
    | {
        name: string;
      }
    | {
        name: string;
      }[];
};

export interface IProduct {
  logo: string;
  name: string;
  short_description: string;
  long_description: string;
  link: string;
  category: string;
}
