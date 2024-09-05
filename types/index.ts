export interface AnimatedSectionProps {
  title: string; // The title for the section
  description: string; // The description for the section
  buttonText: string; // The text for the button
  imageSrc?: string; // The image source (optional)
  alt: string; // The alt text for the image
  containerClassName?: string; // Optional class for the container
  titleClassName?: string; // Optional class for the title
  descriptionClassName?: string; // Optional class for the description
  buttonClassName?: string; // Optional class for the button
  imageContainerClassName?: string; // Optional class for the image container
}

// PRODUCTS INTERFACE

export interface ReturnPolicy {
  policyTitle: string;
  days: number;
}

export interface ProductAttribute {
  attributeName: string;
  attributeValue: string;
}

export interface ProductSEO {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  searchEngineListings: string;
}

export interface ProductVariant {
  tags: string[];
  size: string[];
  quantity: number;
  sellingPrice: number;
  status: boolean;
}

export interface ProductBrand {
  name: string;
  description: string;
  logoURL: string;
}

export interface Product {
  id: number;
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
  productVarients: string[];
  deliveryMethods: string[];
  returnPolicy: ReturnPolicy[];
  productCategory: string[];
  productAttributes: ProductAttribute[];
  productSEO: ProductSEO[];
  productVariants: ProductVariant[];
  productBrand: ProductBrand[];
}
