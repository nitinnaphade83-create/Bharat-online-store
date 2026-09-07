"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { SHOP, whatsappLink } from "@/lib/shop-config";

export default function Header() {
  const router = useRouter();
  const { totalItems } = useCart();
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Trust bar */}
      <div className="bg-primary-container text-on-primary-fixed py-1.5 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-label-sm text-label-sm overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-space-lg">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-secondary-container">local_shipping</span>{" "}
              Delivery {SHOP.deliveryArea}
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">payments</span> Cash on
              Delivery Available
            </span>
            <span className="hidden lg:flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-secondary-fixed-dim">verified_user</span>{" "}
              {SHOP.replacementDays}-Day Replacement if Defective
            </span>
          </div>
          <a href={whatsappLink()} className="flex items-center gap-space-md font-medium">
            <span className="flex items-center gap-1 text-on-primary-container">
              <span className="material-symbols-outlined text-sm">support_agent</span> Call/WhatsApp:{" "}
              <strong className="text-surface-container-lowest ml-1">{SHOP.displayPhone}</strong>
            </span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-surface/95 backdrop-blur-md">
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between gap-space-md">
          <Link href="/" className="flex items-center gap-space-xs shrink-0">
            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
              {SHOP.name}
            </span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-2">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-lg pointer-events-none">
                search
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-24 py-2 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
                placeholder="Search for chargers, cases, cables..."
                type="text"
              />
              <button
                type="submit"
                className="absolute right-1 px-3 py-1 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-secondary-container transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex items-center gap-space-sm shrink-0">
            <Link
              href="/cart"
              className="relative flex flex-col items-center text-on-surface-variant hover:text-on-surface px-1"
            >
              <div className="relative">
                <span className="material-symbols-outlined text-xl text-on-surface">shopping_bag</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-secondary-container text-on-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-surface">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:block font-label-sm text-label-sm mt-0.5">Cart</span>
            </Link>
            <Link href="/login" className="flex flex-col items-center text-on-surface-variant hover:text-on-surface px-1">
              <span className="material-symbols-outlined text-xl">person</span>
              <span className="hidden md:block font-label-sm text-label-sm mt-0.5">Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <div className="bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <nav className="flex items-center gap-space-xs py-2 overflow-x-auto whitespace-nowrap">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md px-3 py-1.5 rounded-lg transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
