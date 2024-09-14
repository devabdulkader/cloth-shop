// types.ts

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  gender: string;
  basePrice: number;
  buyPrice: number;
  otherCost: number;
  discountPrice: number;
  sku: string;
  totalQuantity: number;
  lowStockQuantity: number;
  deliveryPolicy: string;
  shippingReturnPolicy: string;
  url: string;
  alt: string;
  color: string;
  productVariants: IProductVariant[];
  deliveryMethods: string;
  returnPolicy: IReturnPolicy[];
  productCategory: IProductCategory[];
  productAttributes: IProductAttribute[];
  productSEO: IProductSEO[];
  sizes: ISize[];
  availableQuantities: IAvailableQuantity[];
  sellingPrice: number;
  tags: ITag[];
  productBrand: IProductBrand[];
}

export interface IProductVariant {
  _id: string;
  url: string;
  alt: string;
  color: string;
}

export interface IReturnPolicy {
  _id: string;
  policyTitle: string;
  days: number;
}

export interface IProductCategory {
  _id: string;
  name: string;
}

export interface IProductAttribute {
  _id: string;
  attributeName: string;
  attributeValue: string;
}

export interface IProductSEO {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  searchEngineListings: string;
}

export interface ISize {
  _id: string;
  size: string;
}

export interface IAvailableQuantity {
  sizeId: string;
  quantity: number;
}

export interface ITag {
  _id: string;
  name: string;
}

export interface IProductBrand {
  _id: string;
  name: string;
  description: string;
  logoURL: string;
}

export interface IAddToItem {
  _id: string;
  title: string;
  description: string;
  sku: string;
  productCategory: IProductCategory[];
  tags: ITag[];
  productBrand: IProductBrand[];
  url: string;
  alt: string;
  color: string;
  selectedProductId: string;
  selectedProductUrl: string;
  selectedProductColor: string;
  selectedProductSize: string;
  gender: string;
  basePrice: number;
  buyPrice: number;
  otherCost?: number; // Optional if not always present
  discountPrice?: number; // Optional if not always present
  sizes: ISize[];
  deliveryMethods: string;
  sellingPrice: number;
  productVariants: IProductVariant[];
  quantity: number;
}

export interface IStoreItem extends IAddToItem {
  uuid: string;
  date: string;
}
