"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { discountPercent, formatINR } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const discount = discountPercent(product.price, product.mrp);

  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
      <Link href={`/product/${product.slug}`} className="relative block bg-surface-container-low aspect-square">
        {discount > 0 && (
          <span className="absolute top-2 left-2 z-10 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
            {discount}% OFF
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-4"
        />
      </Link>
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-label-md text-label-md text-on-surface font-semibold line-clamp-1 hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
          {product.shortDescription}
        </p>
        {product.reviewCount > 0 && (
          <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
            <span className="flex items-center gap-0.5 bg-tertiary-container text-tertiary-fixed px-1.5 py-0.5 rounded font-bold">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              {product.rating}
            </span>
            <span>({product.reviewCount})</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-price-display text-price-display text-on-surface">{formatINR(product.price)}</span>
          {discount > 0 && (
            <span className="font-price-mrp text-price-mrp text-on-surface-variant line-through">
              {formatINR(product.mrp)}
            </span>
          )}
        </div>
        <button
          onClick={() => addToCart(product.id)}
          className="mt-2 w-full py-2 bg-primary-container text-on-primary rounded-xl font-label-md text-label-md font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
