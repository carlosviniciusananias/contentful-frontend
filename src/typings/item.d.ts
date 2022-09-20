export interface Item {
  metadata: Metadata;
  sys: Sys2;
  fields: Product;
}

interface Product {
  name: string;
  image: Image;
  price: number;
  available: boolean;
}

interface Image {
  metadata: Metadata;
  sys: Sys3;
  fields: Fields;
}

interface Fields {
  title: string;
  description: string;
  file: File;
}

interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

interface Details {
  size: number;
  image: Image;
}

interface Image {
  width: number;
  height: number;
}

interface Sys3 {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Space;
  revision: number;
  locale: string;
}

interface Sys2 {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Space;
  revision: number;
  contentType: Space;
  locale: string;
}

interface Space {
  sys: Sys;
}

interface Sys {
  type: string;
  linkType: string;
  id: string;
}

interface Metadata {
  tags: any[];
}
