'use client';

import { useState } from 'react';
import ImageWithFallback from './components/ImageWithFallback';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [showPartyModal, setShowPartyModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const menuItems = [
    { 
      name: "Dimsum Mentai", 
      price: "16.000", 
      image: "🥟", 
      desc: "Udang segar premium dengan saus mentai creamy yang meleleh di lidah",
      detailDesc: "Dimsum Mentai kami dibuat dengan udang segar pilihan yang dipadukan dengan saus mentai creamy khas Jepang. Setiap gigitan memberikan sensasi lumer di mulut dengan rasa gurih yang sempurna. Cocok untuk Anda yang menyukai perpaduan seafood premium dengan saus yang kaya rasa.",
      ingredients: ["Udang segar premium", "Saus mentai creamy", "Kulit dimsum halus", "Bumbu rahasia"]
    },
    { 
      name: "Dimsum Original", 
      price: "16.000", 
      image: "🥢", 
      desc: "Daging ayam pilihan dengan bumbu rahasia warisan keluarga",
      detailDesc: "Dimsum klasik dengan isian daging ayam pilihan yang dibumbui dengan resep warisan turun-temurun. Tekstur daging yang lembut dan juicy berpadu dengan kulit dimsum yang kenyal. Menu favorit keluarga yang tidak pernah mengecewakan.",
      ingredients: ["Daging ayam premium", "Bumbu warisan keluarga", "Kulit dimsum tradisional", "Sayuran segar"]
    },
    { 
      name: "Dimsum Chili Oil", 
      price: "15.000", 
      image: "🌶️", 
      desc: "Dimsum lembut dengan siraman chili oil pedas gurih yang menggugah selera",
      detailDesc: "Dimsum Chili Oil kami adalah perpaduan sempurna antara dimsum kukus yang lembut dengan saus chili oil khas yang kaya rasa. Minyak cabai yang aromatik dengan sentuhan bawang putih dan rempah pilihan menciptakan cita rasa pedas gurih yang adiktif. Cocok untuk pecinta makanan pedas yang ingin sensasi berbeda.",
      ingredients: ["Dimsum ayam/udang pilihan", "Chili oil homemade", "Bawang putih goreng", "Wijen sangrai", "Daun bawang segar"]
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden" style={{backgroundColor: "#b91c1c"}}>
      {/* Foto sebagai pola texture subtle */}
      <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: "url('/images/2da44ca0470eb971df947ecd9592be42.jpg')", backgroundSize: "300px", backgroundRepeat: "repeat"}}></div>
      {/* Chinese Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 border-8 border-white"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-8 border-white"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-32 border-4 border-white rounded-full opacity-30"></div>
      <div className="absolute top-20 left-32 w-16 h-28 border-4 border-orange-400 rounded-full opacity-40"></div>
      <div className="absolute top-32 right-20 w-20 h-32 border-4 border-white rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-40 w-16 h-28 border-4 border-orange-400 rounded-full opacity-40"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Cita Rasa Bintang Lima,<br />
              <span className="text-orange-300">Harga Bersahabat</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 font-semibold mb-8 leading-relaxed">
              Setiap gigitan dimsum kami adalah perpaduan sempurna antara tradisi kuliner China dan bahan premium pilihan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative">
              <div className="bg-orange-400 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/874a5bbc-1c49-424d-8c54-38521274937d.jpg"
                      alt="Dimsum Mustika"
                      fallbackEmoji="🥟"
                      className="w-full h-72 object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                      <h2 className="text-3xl font-black text-white mb-1">Dimsum Mustika</h2>
                      <p className="text-orange-300 text-xs font-bold mb-3">KUALITAS PREMIUM, HARGA TERJANGKAU</p>
                      <div className="flex gap-2 justify-center">
                        <a href="https://wa.me/6285212508683" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold inline-block">💬 WhatsApp</a>
                        <a href="tel:085212508683" className="bg-white text-red-600 px-4 py-2 rounded-full text-xs font-bold inline-block">📞 Telepon</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <article 
                  key={index} 
                  onClick={() => setSelectedProduct(index)}
                  className="bg-amber-100 rounded-2xl p-6 text-red-900 shadow-xl border-4 border-orange-400 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  {index === 0 && (
                    <div className="absolute top-0 left-0 w-20 h-20 z-10">
                      <img 
                        src="/images/Best_Sellers_Clipart_Vector__Best_Seller_Red_Label__Guarantee__Shop__Background_PNG_Image_For_Free_Download-removebg-preview.png" 
                        alt="Best Seller" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="w-full h-32 mb-3 rounded-xl overflow-hidden bg-white/10">
                    <ImageWithFallback
                      src={
                        index === 0 ? "/images/e1bb6e69-ae3e-4650-96d8-54483531b7de.jpg" :
                        index === 1 ? "/images/84d0d2bd-2941-4833-8bfc-369cc51602a6.jpg" :
                        "/images/49e0078b6df2ce0844e7f68001cacebc.jpg"
                      }
                      alt={item.name}
                      fallbackEmoji={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-black text-lg mb-2 uppercase text-red-800">{item.name}</h3>
                  <p className="text-red-700 text-xs mb-3">{item.desc}</p>
                  <div className="bg-orange-400 text-red-900 font-black px-3 py-1 rounded-full inline-block text-sm">
                    Rp {item.price}
                  </div>
                  <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2 text-xs">
                    👁️ Lihat Detail
                  </div>
                </article>
              ))}

              {/* Card Jam Operasional */}
              <article className="bg-amber-100 rounded-2xl p-6 text-red-900 shadow-xl border-4 border-orange-400 flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-3">🕐</div>
                  <h3 className="font-black text-lg mb-4 uppercase text-red-800">Jam Operasional</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center border-b border-red-300 pb-2">
                      <span className="text-red-700">Senin - Jumat</span>
                      <span className="font-bold text-red-900">07.00 - 21.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-red-300 pb-2">
                      <span className="text-red-700">Sabtu - Minggu</span>
                      <span className="font-bold text-red-900">07.00 - 22.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-red-700">Delivery</span>
                      <span className="font-bold text-green-700">✓ Tersedia</span>
                    </div>
                  </div>
                </div>
                <a href="https://wa.me/6285212508683" target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 bg-orange-400 text-red-900 font-black px-3 py-2 rounded-full text-sm text-center block hover:bg-orange-300 transition-colors">
                  💬 Order via WA
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Daftar Harga Section */}
        <section className="container mx-auto px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-white mb-2">🥟 Daftar Harga</h2>
              <p className="text-orange-200">Pilih sesuai selera dan kebutuhan Anda</p>
            </div>
            <div className="space-y-4">
              <div className="bg-red-700 border-4 border-orange-400 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧡</span>
                  <h3 className="text-2xl font-black uppercase">Dimsum Mentai</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-red-600/50 rounded-xl px-4 py-3">
                    <span className="text-orange-200">3 pcs</span>
                    <span className="font-black text-orange-300 text-lg">Rp 16.000</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-600/50 rounded-xl px-4 py-3">
                    <span className="text-orange-200">6 pcs</span>
                    <span className="font-black text-orange-300 text-lg">Rp 32.000</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-700 border-4 border-orange-400 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🥢</span>
                  <h3 className="text-2xl font-black uppercase">Dimsum Original</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-red-600/50 rounded-xl px-4 py-3">
                    <span className="text-orange-200">3 pcs</span>
                    <span className="font-black text-orange-300 text-lg">Rp 10.000</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-600/50 rounded-xl px-4 py-3">
                    <span className="text-orange-200">5 pcs</span>
                    <span className="font-black text-orange-300 text-lg">Rp 16.000</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-700 border-4 border-orange-400 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌶️</span>
                  <h3 className="text-2xl font-black uppercase">Dimsum Chili Oil</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-red-600/50 rounded-xl px-4 py-3">
                    <span className="text-orange-200">3 pcs</span>
                    <span className="font-black text-orange-300 text-lg">Rp 12.000</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-600/50 rounded-xl px-4 py-3">
                    <span className="text-orange-200">5 pcs</span>
                    <span className="font-black text-orange-300 text-lg">Rp 20.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12 relative">
            {/* Ornamen subtle */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-8 w-16 h-16 border-4 border-red-500 rounded-full opacity-40"></div>
              <div className="absolute top-4 left-20 w-8 h-8 border-2 border-red-500 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 right-8 w-16 h-16 border-4 border-red-500 rounded-full opacity-40"></div>
              <div className="absolute bottom-4 right-20 w-8 h-8 border-2 border-red-500 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-0 w-24 h-1 bg-red-500 opacity-20 rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-24 h-1 bg-red-500 opacity-20 rounded-full"></div>
              <div className="absolute top-2 left-1/4 text-red-500 opacity-20 text-4xl">✦</div>
              <div className="absolute top-2 right-1/4 text-red-500 opacity-20 text-4xl">✦</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Mengapa Dimsum Mustika?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <article className="bg-amber-100 rounded-3xl p-8 shadow-2xl border-4 border-orange-400">
              <div className="mb-4 w-full h-48 bg-orange-50 rounded-2xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=600&fit=crop" 
                  alt="Udang Segar Premium" 
                  fallbackEmoji="🦐" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-black text-red-700 mb-4 text-center">Udang Segar Pilihan</h3>
              <p className="text-red-800 leading-relaxed text-center">
                Kami hanya menggunakan udang segar berkualitas premium yang dipilih langsung setiap pagi.
              </p>
            </article>

            <article className="bg-amber-100 rounded-3xl p-8 shadow-2xl border-4 border-orange-400">
              <div className="mb-4 w-full h-48 bg-orange-50 rounded-2xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="/images/49d1e6ba405baccfdf33280efe387b16.jpg"
                  alt="Daging Ayam Premium"
                  fallbackEmoji="🍗"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-red-700 mb-4 text-center">Daging Ayam Premium</h3>
              <p className="text-red-800 leading-relaxed text-center">
                Daging ayam pilihan tanpa lemak berlebih, diproses dengan standar kebersihan tertinggi.
              </p>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <article 
              onClick={() => setShowPartyModal(true)}
              className="bg-red-800 rounded-3xl p-8 text-white border-4 border-orange-400 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
                  alt="Party Dimsum"
                  fallbackEmoji="🎉"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Paket Spesial untuk Acara Istimewa</h3>
                <p className="text-orange-300 mb-4 text-lg">
                  Hadirkan kelezatan dimsum premium untuk ulang tahun, arisan, gathering kantor, atau perayaan keluarga Anda.
                </p>
                <div className="bg-orange-400 text-red-900 px-6 py-2 rounded-full font-bold inline-block">
                  Konsultasi Paket Party
                </div>
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2 text-xs">
                  👁️ Lihat Detail
                </div>
              </div>
            </article>

            <article 
              onClick={() => setShowLocationModal(true)}
              className="bg-red-700 rounded-3xl p-8 text-white border-4 border-orange-400 cursor-pointer hover:scale-105 transition-transform duration-300 relative"
            >
              <h3 className="text-3xl font-black mb-4">Lokasi Kami</h3>
              <p className="font-bold mb-2">📍 Dimsum Mustika</p>
              <p className="text-sm mb-2">Blok C 17 no 22</p>
              <p className="font-bold mb-4">📞 <a href="tel:085212508683" onClick={(e) => e.stopPropagation()}>085212508683</a></p>
              <p className="text-sm mb-4 font-semibold">Buka Setiap Hari | Delivery & Takeaway Available</p>
              <div className="bg-orange-400 text-red-900 px-6 py-2 rounded-full font-bold inline-block">
                Hubungi Kami
              </div>
              <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2 text-xs">
                👁️ Lihat Detail
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center text-white">
          <h3 className="text-orange-300 font-bold text-2xl mb-2">Dimsum Mustika</h3>
          <p className="text-sm opacity-75 mb-3 italic">Warisan Cita Rasa, Kualitas Premium untuk Semua</p>
          <p className="mb-2">📞 <a href="tel:085212508683">085212508683</a></p>
          <p className="text-sm mb-4">📍 Blok C 17 no 22, Mustika</p>
          <p className="text-xs mt-4 opacity-50">&copy; 2024 Dimsum Mustika. Semua Hak Dilindungi.</p>
        </footer>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct !== null && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-red-700 z-10"
            >
              ✕
            </button>

            {/* Product Image */}
            <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 overflow-hidden">
              <ImageWithFallback
                src={
                  selectedProduct === 0 ? "/images/e1bb6e69-ae3e-4650-96d8-54483531b7de.jpg" :
                  selectedProduct === 1 ? "/images/84d0d2bd-2941-4833-8bfc-369cc51602a6.jpg" :
                  selectedProduct === 2 ? "/images/49e0078b6df2ce0844e7f68001cacebc.jpg" :
                  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop"
                }
                alt={menuItems[selectedProduct].name}
                fallbackEmoji={menuItems[selectedProduct].image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-black text-red-700">{menuItems[selectedProduct].name}</h2>
                <div className="bg-orange-400 text-red-900 font-black px-4 py-2 rounded-full text-lg">
                  Rp {menuItems[selectedProduct].price}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 italic">{menuItems[selectedProduct].desc}</p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">Deskripsi Lengkap</h3>
                <p className="text-gray-700 leading-relaxed">{menuItems[selectedProduct].detailDesc}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">Komposisi</h3>
                <ul className="space-y-2">
                  {menuItems[selectedProduct].ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-orange-400 mr-2">✓</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://wa.me/6285212508683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white text-center py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="tel:085212508683" 
                  className="flex-1 bg-red-600 text-white text-center py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                >
                  📞 Telepon
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Party Package Modal */}
      {showPartyModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPartyModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPartyModal(false)}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-red-700 z-10"
            >
              ✕
            </button>

            <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 overflow-hidden">
              <ImageWithFallback
                src="/images/dimsum mentai @dimsum_yn.jpg"
                alt="Party Package"
                fallbackEmoji="🎉"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-black text-red-700 mb-4">🎉 Paket Spesial untuk Acara Istimewa</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Jadikan acara Anda lebih berkesan dengan hidangan dimsum premium dari Dimsum Mustika. 
                Kami menyediakan paket khusus yang dapat disesuaikan dengan kebutuhan acara Anda.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">Cocok untuk Berbagai Acara</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">🎂</span>
                    Ulang Tahun & Perayaan Keluarga
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">👥</span>
                    Arisan & Gathering Komunitas
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">💼</span>
                    Meeting & Acara Kantor
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">🎊</span>
                    Syukuran & Acara Spesial Lainnya
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">Keuntungan Paket Party</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">✓</span>
                    Harga spesial untuk pemesanan dalam jumlah banyak
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">✓</span>
                    Variasi menu yang dapat disesuaikan
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">✓</span>
                    Kemasan praktis dan menarik
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">✓</span>
                    Konsultasi gratis untuk menu terbaik
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-orange-400 mr-2">✓</span>
                    Pengiriman tepat waktu sesuai jadwal acara
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-2 border-orange-400 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-red-700 mb-2">💡 Tips Pemesanan</h3>
                <p className="text-gray-700 text-sm">
                  Untuk hasil terbaik, lakukan pemesanan minimal 2-3 hari sebelum acara. 
                  Hubungi kami untuk konsultasi menu dan estimasi jumlah porsi yang sesuai dengan jumlah tamu Anda.
                </p>
              </div>

              <div className="flex gap-4">
                <a 
                  href="tel:085212508683" 
                  className="flex-1 bg-red-600 text-white text-center py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                >
                  📞 Konsultasi Sekarang
                </a>
                <button
                  onClick={() => setShowPartyModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {showLocationModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLocationModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-red-700 z-10"
            >
              ✕
            </button>

            <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden flex items-center justify-center">
              <div className="text-9xl">📍</div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-black text-red-700 mb-6">📍 Lokasi Kami</h2>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-400 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4">Dimsum Mustika</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🏠</span>
                    <div>
                      <p className="font-bold text-gray-800">Alamat Lengkap</p>
                      <p className="text-gray-700">Blok C 17 no 22, Mustika</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📞</span>
                    <div>
                      <p className="font-bold text-gray-800">Telepon / WhatsApp</p>
                      <a href="tel:085212508683" className="text-red-600 font-bold hover:underline">085212508683</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🕐</span>
                    <div>
                      <p className="font-bold text-gray-800">Jam Operasional</p>
                      <p className="text-gray-700">Buka Setiap Hari</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">Layanan Tersedia</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🛵</div>
                    <p className="font-bold text-gray-800">Delivery</p>
                    <p className="text-xs text-gray-600">Antar ke lokasi Anda</p>
                  </div>
                  <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🥡</div>
                    <p className="font-bold text-gray-800">Takeaway</p>
                    <p className="text-xs text-gray-600">Ambil di tempat</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-400 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-red-700 mb-2">💡 Cara Pemesanan</h3>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Hubungi kami via telepon atau WhatsApp di 085212508683</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>Sebutkan menu dan jumlah yang Anda inginkan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Pilih delivery atau takeaway</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">4.</span>
                    <span>Nikmati dimsum premium kami!</span>
                  </li>
                </ol>
              </div>

              <div className="flex gap-4">
                <a 
                  href="tel:085212508683" 
                  className="flex-1 bg-red-600 text-white text-center py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                >
                  📞 Hubungi Kami
                </a>
                <a 
                  href="https://wa.me/6285212508683" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white text-center py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
              
              <button
                onClick={() => setShowLocationModal(false)}
                className="w-full mt-3 bg-gray-200 text-gray-700 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
