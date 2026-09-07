import Link from "next/link";
import { CATEGORIES, getBestSellers, getNewArrivals } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { SHOP } from "@/lib/shop-config";

export default function HomePage() {
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();

  return (
    <div className="flex flex-col gap-space-2xl pb-space-2xl">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-space-lg w-full">
        <div className="bg-primary-container rounded-2xl p-8 md:p-12 flex flex-col gap-3 items-start">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed-dim font-bold">
            {SHOP.name} - Holkarwadi, Pune
          </span>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-surface-container-lowest max-w-xl">
            Genuine mobile accessories from your local shop
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-primary max-w-lg">
            Chargers, cases, cables and more &mdash; message us on WhatsApp to check stock or place an order.
          </p>
          <Link
            href="/products/chargers-adapters"
            className="mt-2 px-6 py-3 bg-secondary-container text-on-primary rounded-xl font-label-md text-label-md font-bold hover:opacity-90 transition-opacity"
          >
            Shop Fast Chargers
          </Link>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">Shop by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-space-sm">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="flex flex-col items-center gap-2 bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-center"
            >
              <span className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-sm">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* More products */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">More Accessories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-sm">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Why shop with us */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">Why shop with {SHOP.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[
              {
                icon: "storefront",
                title: "Local, in-person shop",
                text: `Visit us at ${SHOP.addressLine} to see products before you order online.`
              },
              {
                icon: "chat",
                title: "Fast WhatsApp support",
                text: "Message us directly with questions about fit, stock, or your order status."
              },
              {
                icon: "payments",
                title: "Pay your way",
                text: "UPI, cards, or Cash on Delivery - whatever's easiest for you."
              }
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-2">
                <span className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary-container">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </span>
                <span className="font-label-md text-label-md font-bold text-on-surface">{item.title}</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
