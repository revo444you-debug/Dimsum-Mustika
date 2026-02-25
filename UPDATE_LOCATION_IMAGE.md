# Update Gambar Section Lokasi Kami

## Instruksi Manual:

Buka file `app/page.tsx`, cari section "Lokasi Kami" (sekitar baris 284-297)

**GANTI BAGIAN INI:**
```tsx
<article className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-red-900 border-4 border-white relative overflow-hidden">
  <div className="absolute bottom-4 left-4 text-6xl opacity-20" aria-hidden="true">📍</div>
  <h3 className="text-3xl font-black mb-4">Lokasi Kami</h3>
  <address className="not-italic">
    <p className="font-bold mb-2">📍 Dimsum Mustika</p>
    <p className="text-sm mb-2">Blok C 17 no 22</p>
    <p className="font-bold mb-4">📞 <a href="tel:085212508683" className="hover:underline">085212508683</a></p>
  </address>
  <p className="text-sm mb-4 font-semibold">Buka Setiap Hari | Delivery & Takeaway Available</p>
  <a href="tel:085212508683" className="bg-red-700 text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition inline-block">
    Hubungi Kami
  </a>
</article>
```

**DENGAN INI:**
```tsx
<article className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-red-900 border-4 border-white relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 opacity-20">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
      alt="Restaurant Location"
      fallbackEmoji="📍"
      className="w-full h-full object-cover"
    />
  </div>
  
  <div className="relative z-10">
    <h3 className="text-3xl font-black mb-4">Lokasi Kami</h3>
    <address className="not-italic">
      <p className="font-bold mb-2">📍 Dimsum Mustika</p>
      <p className="text-sm mb-2">Blok C 17 no 22</p>
      <p className="font-bold mb-4">📞 <a href="tel:085212508683" className="hover:underline">085212508683</a></p>
    </address>
    <p className="text-sm mb-4 font-semibold">Buka Setiap Hari | Delivery & Takeaway Available</p>
    <a href="tel:085212508683" className="bg-red-700 text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition inline-block">
      Hubungi Kami
    </a>
  </div>
</article>
```

## Gambar yang Digunakan:
- **Restaurant Interior**: https://images.unsplash.com/photo-1517248135467-4c7edcad34c4
  (Foto interior restaurant yang cozy dan welcoming)

Setelah edit, save dan refresh browser!
