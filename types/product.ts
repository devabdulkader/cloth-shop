// Type for product images
export interface ProductImage {
  _id: string;
  url: string;
  alt: string;
  color: string;
}

// Type for return policy
interface ReturnPolicy {
  _id: string;
  policyTitle: string;
  days: number;
}

// Type for product categories
interface ProductCategory {
  _id: string;
  name: string;
}

// Type for product attributes
interface ProductAttribute {
  _id: string;
  attributeName: string;
  attributeValue: string;
}

// Type for product SEO
interface ProductSEO {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  searchEngineListings: string;
}

// Type for product sizes
interface ProductSize {
  _id: string;
  size: string;
}

// Type for available quantities
interface AvailableQuantity {
  sizeId: string;
  quantity: number;
}

// Type for product tags
interface ProductTag {
  _id: string;
  name: string;
}

// Type for product brand
interface ProductBrand {
  _id: string;
  name: string;
  description: string;
  logoURL: string;
}

// Main product type
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
  productVariants: ProductImage[];
  deliveryMethods: string;
  returnPolicy: ReturnPolicy[];
  productCategory: ProductCategory[];
  productAttributes: ProductAttribute[];
  productSEO: ProductSEO[];
  sizes: ProductSize[];
  availableQuantities: AvailableQuantity[];
  sellingPrice: number;
  tags: ProductTag[];
  productBrand: ProductBrand[];
}
