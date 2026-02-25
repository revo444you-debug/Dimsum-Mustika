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
      price: "25.000", 
      image: "🥟", 
      desc: "Udang segar premium dengan saus mentai creamy yang meleleh di lidah",
      detailDesc: "Dimsum Mentai kami dibuat dengan udang segar pilihan yang dipadukan dengan saus mentai creamy khas Jepang. Setiap gigitan memberikan sensasi lumer di mulut dengan rasa gurih yang sempurna. Cocok untuk Anda yang menyukai perpaduan seafood premium dengan saus yang kaya rasa.",
      ingredients: ["Udang segar premium", "Saus mentai creamy", "Kulit dimsum halus", "Bumbu rahasia"]
    },
    { 
      name: "Dimsum Reguler", 
      price: "19.000", 
      image: "🥢", 
      desc: "Daging ayam pilihan dengan bumbu rahasia warisan keluarga",
      detailDesc: "Dimsum klasik dengan isian daging ayam pilihan yang dibumbui dengan resep warisan turun-temurun. Tekstur daging yang lembut dan juicy berpadu dengan kulit dimsum yang kenyal. Menu favorit keluarga yang tidak pernah mengecewakan.",
      ingredients: ["Daging ayam premium", "Bumbu warisan keluarga", "Kulit dimsum tradisional", "Sayuran segar"]
    },
    { 
      name: "Gyoza", 
      price: "15.000", 
      image: "🥟", 
      desc: "Kulit renyah sempurna, isian daging juicy yang menggugah selera",
      detailDesc: "Gyoza dengan kulit yang dipanggang hingga renyah di bagian bawah dan lembut di bagian atas. Isian daging yang juicy dengan campuran sayuran segar memberikan tekstur dan rasa yang sempurna. Disajikan dengan saus gyoza spesial yang menambah kelezatan.",
      ingredients: ["Daging babi/ayam pilihan", "Sayuran segar", "Kulit gyoza renyah", "Saus gyoza spesial"]
    },
    { 
      name: "Fresh Drink", 
      price: "-", 
      image: "🥤", 
      desc: "Minuman segar pilihan untuk melengkapi pengalaman kuliner Anda",
      detailDesc: "Berbagai pilihan minuman segar untuk menemani santapan dimsum Anda. Mulai dari teh tradisional, jus buah segar, hingga minuman modern yang menyegarkan. Sempurnakan pengalaman kuliner Anda dengan minuman pilihan kami.",
      ingredients: ["Teh premium", "Buah segar", "Es batu", "Sirup pilihan"]
    },
  ];

  return (
    <main className="min-h-screen bg-red-700 relative overflow-hidden">
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
              <div className="bg-black rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-red-600 p-8 text-center relative">
                    <div className="text-6xl mb-4">🥟</div>
                    <h2 className="text-4xl font-black text-white mb-2">Dimsum Mustika</h2>
                    <p className="text-orange-300 text-sm font-bold">KUALITAS PREMIUM, HARGA TERJANGKAU</p>
                    <div className="mt-6">
                      <a href="tel:085212508683" className="bg-white text-red-600 px-6 py-2 rounded-full text-sm font-bold inline-block">Pesan Sekarang</a>
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
                  className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 text-white shadow-xl border-4 border-orange-400 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-32 mb-3 rounded-xl overflow-hidden bg-white/10">
                    <ImageWithFallback
                      src={
                        index === 0 ? "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop" :
                        index === 1 ? "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop" :
                        index === 2 ? "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop" :
                        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
                      }
                      alt={item.name}
                      fallbackEmoji={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-black text-lg mb-2 uppercase">{item.name}</h3>
                  <p className="text-orange-200 text-xs mb-3">{item.desc}</p>
                  <div className="bg-orange-400 text-red-900 font-black px-3 py-1 rounded-full inline-block text-sm">
                    Rp {item.price}
                  </div>
                  <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2 text-xs">
                    👁️ Lihat Detail
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Mengapa Dimsum Mustika?</h2>
            <p className="text-orange-200 text-lg font-semibold">Tiga Pilar Keunggulan yang Membedakan Kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-orange-400">
              <div className="mb-4 w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=600&fit=crop" 
                  alt="Udang Segar Premium" 
                  fallbackEmoji="🦐" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-black text-red-700 mb-4 text-center">Udang Segar Pilihan</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Kami hanya menggunakan udang segar berkualitas premium yang dipilih langsung setiap pagi.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-orange-400">
              <div className="mb-4 w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=600&fit=crop"
                  alt="Daging Ayam Premium"
                  fallbackEmoji="🍗"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-red-700 mb-4 text-center">Daging Ayam Premium</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Daging ayam pilihan tanpa lemak berlebih, diproses dengan standar kebersihan tertinggi.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-orange-400">
              <div className="mb-4 w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop"
                  alt="Resep Warisan"
                  fallbackEmoji="📜"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-red-700 mb-4 text-center">Resep Warisan Turun-Temurun</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Resep autentik yang diwariskan dari generasi ke generasi, dipadukan dengan teknik modern.
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
              className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-red-900 border-4 border-white cursor-pointer hover:scale-105 transition-transform duration-300 relative"
            >
              <h3 className="text-3xl font-black mb-4">Lokasi Kami</h3>
              <p className="font-bold mb-2">📍 Dimsum Mustika</p>
              <p className="text-sm mb-2">Blok C 17 no 22</p>
              <p className="font-bold mb-4">📞 <a href="tel:085212508683" onClick={(e) => e.stopPropagation()}>085212508683</a></p>
              <p className="text-sm mb-4 font-semibold">Buka Setiap Hari | Delivery & Takeaway Available</p>
              <div className="bg-red-700 text-white px-6 py-2 rounded-full font-bold inline-block">
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
                  selectedProduct === 0 ? "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop" :
                  selectedProduct === 1 ? "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop" :
                  selectedProduct === 2 ? "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop" :
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
                  href="tel:085212508683" 
                  className="flex-1 bg-red-600 text-white text-center py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                >
                  📞 Pesan Sekarang
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
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
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
