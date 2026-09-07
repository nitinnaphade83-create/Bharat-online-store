export const SHOP = {
  name: "Aarya Mobile Store",
  whatsappNumber: "918668552557", // country code + number, no spaces/plus, for wa.me links
  displayPhone: "+91 86685 52557",
  addressLine: "Holkarwadi, Pune, Maharashtra",
  hours: "Open Daily: 9:00 AM - 10:00 PM",
  mapQuery: "Holkarwadi Pune Maharashtra",
  replacementDays: 5,
  deliveryArea: "All over India"
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${SHOP.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
