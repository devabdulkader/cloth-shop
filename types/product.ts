// Interface for Product Variants
export interface IProductVariant {
  _id: string;
  url: string;
  alt: string;
  color: string;
}

// Interface for Return Policy
export interface IReturnPolicy {
  _id: string;
  policyTitle: string;
  days: number;
}

// Interface for Product Category
export interface IProductCategory {
  _id: string;
  name: string;
}

// Interface for Product Attributes
export interface IProductAttribute {
  _id: string;
  attributeName: string;
  attributeValue: string;
}

// Interface for Product SEO
export interface IProductSEO {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  searchEngineListings: string;
}

// Interface for Sizes
export interface ISize {
  _id: string;
  size: string;
}

// Interface for Available Quantities
export interface IAvailableQuantity {
  sizeId: string;
  quantity: number;
}

// Interface for Tags
export interface ITag {
  _id: string;
  name: string;
}

// Interface for Product Brand
export interface IProductBrand {
  _id: string;
  name: string;
  description: string;
  logoURL: string;
}

// Main Product Interface
export interface IProduct {
  id: string;
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
