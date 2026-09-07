"use client";

import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { SHOP } from "@/lib/shop-config";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-space-2xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl pb-space-lg">
          <TrustItem icon="local_shipping" title="Ships All Over India" desc="Delivery available nationwide" />
          <TrustItem icon="verified" title="Genuine Products" desc="Available for in-store pickup too" />
          <TrustItem icon="currency_rupee" title="Cash on Delivery" desc="Pay at doorstep after checking" />
          <TrustItem
            icon="published_with_changes"
            title={`${SHOP.replacementDays}-Day Replacement`}
            desc="If the product is defective"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">{SHOP.name}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
              Your reliable neighborhood tech destination for mobile accessories, chargers, audio gear, and spare
              parts.
            </p>
            <div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-base text-on-surface-variant shrink-0 mt-0.5">
                  storefront
                </span>
                <span>{SHOP.addressLine}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined text-base text-on-surface-variant shrink-0">
                  schedule
                </span>
                <span>{SHOP.hours}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">Categories</h4>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="hover:text-on-surface transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">Customer Help</h4>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link href="/about" className="hover:text-on-surface transition-colors">
                  About &amp; Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-on-surface transition-colors">
                  Your Cart
                </Link>
              </li>
              <li>
                <Link href="/order-confirmation" className="hover:text-on-surface transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">Deals &amp; Restock Alerts</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
              Get WhatsApp updates on new launches and discounts.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full px-3 py-2 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none"
                placeholder="Enter 10-digit Mobile No."
                type="text"
              />
              <button
                type="submit"
                className="w-full py-2 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold hover:bg-secondary-container transition-colors"
              >
                Subscribe to Deals
              </button>
            </form>
          </div>
        </div>

        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/30">
          <div className="flex flex-wrap items-center gap-2 pt-space-md">
            {["UPI / GPay", "PhonePe", "Paytm", "RuPay", "Visa / Master", "Cash on Delivery"].map((m) => (
              <span
                key={m}
                className="px-2 py-1 bg-surface-container-lowest rounded text-xs font-bold text-on-surface shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="text-center md:text-right font-label-sm text-label-sm pt-space-md">
            © {new Date().getFullYear()} {SHOP.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function TrustItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface shrink-0">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-headline-sm text-headline-sm text-on-surface">{title}</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
      </div>
    </div>
  );
}
