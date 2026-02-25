# Cara Memperbaiki USP 1 (Udang Segar)

Error sudah diperbaiki untuk USP 2 dan USP 3. Untuk USP 1, ada masalah encoding karakter.

## Solusi Manual:

1. Buka file `app/page.tsx`
2. Cari baris sekitar 172-173 yang berisi:
   ```tsx
   <div className="text-6xl mb-4 text-center" aria-hidden="true">🦐</div>
   ```

3. Ganti dengan kode berikut:
   ```tsx
   <div className="mb-4 w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
     <ImageWithFallback
       src="/images/udang-segar.jpg"
       alt="Udang Segar Premium Dimsum Mustika"
       fallbackEmoji="🦐"
       className="w-full h-full object-cover"
     />
   </div>
   ```

4. Save file

## Yang Sudah Berhasil:
✅ Client Component `ImageWithFallback` sudah dibuat
✅ Import sudah ditambahkan di `app/page.tsx`
✅ USP 2 (Daging Ayam) sudah menggunakan foto
✅ USP 3 (Resep Warisan) sudah menggunakan foto

## Tinggal:
❌ USP 1 (Udang Segar) - perlu edit manual karena masalah encoding

Setelah diperbaiki, tambahkan 3 foto ke folder `public/images/`:
- udang-segar.jpg
- ayam-premium.jpg
- resep-warisan.jpg
