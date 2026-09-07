import { whatsappLink } from "@/lib/shop-config";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden group-hover:flex items-center mr-3 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-xl shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] whitespace-nowrap">
        Chat with Shop Owner / Check Stock
      </div>
      <a
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(15,23,42,0.12)] hover:scale-105 transition-all"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
      </a>
    </div>
  );
}
