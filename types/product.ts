// Define type for product images
interface ProductImage {
  _id: string;
  url: string;
  alt: string;
  color: string;
}
interface IImage {
  _id: string;
  url: string;
  alt: string;
}

// Define type for delivery methods
type DeliveryMethod = "DHL Express" | "FedEx" | "Local Post";

// Define type for return policy
interface ReturnPolicy {
  _id: string;
  policyTitle: string;
  days: number;
}

// Define type for product categories
interface ProductCategory {
  _id: string;
  name: string;
}

// Define type for product attributes
interface ProductAttribute {
  _id: string;
  attributeName: string;
  attributeValue: string;
}

// Define type for product SEO
interface ProductSEO {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  searchEngineListings: string;
}

// Define type for product variants
interface ProductVariant {
  _id: string;
  tags: string[];
  size: string[];
  quantity: number;
  sellingPrice: number;
  status: boolean;
}

// Define type for product brand
interface ProductBrand {
  _id: string;
  name: string;
  description: string;
  logoURL: string;
}

// Define type for a product
export interface IProduct {
  _id: string;
  title: string;
  description: string;
  gender: "Unisex" | "Male" | "Female";
  basePrice: number;
  buyPrice: number;
  otherCost: number;
  discountPrice: number;
  sku: string;
  totalQuantity: number;
  lowStockQuantity: number;
  displayImage: IImage;
  productImgs: ProductImage[];
  deliveryMethods: DeliveryMethod[];
  returnPolicy: ReturnPolicy[];
  productCategory: ProductCategory[];
  productAttributes: ProductAttribute[];
  productSEO: ProductSEO[];
  productVariants: ProductVariant[];
  productBrand: ProductBrand[];
}
