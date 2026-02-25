# Update USP 1 dengan Foto Unsplash

## Yang Sudah Berhasil:
✅ USP 2 (Daging Ayam) - menggunakan foto Unsplash ayam
✅ USP 3 (Resep Warisan) - menggunakan foto Unsplash dimsum
✅ Next.js config - sudah ditambahkan domain Unsplash
✅ Metadata SEO - sudah ditambahkan Open Graph image

## Cara Manual Update USP 1:

Buka file `app/page.tsx`, cari baris ~172-173:

**GANTI INI:**
```tsx
<div className="text-6xl mb-4 text-center" aria-hidden="true">🦐</div>
```

**DENGAN INI:**
```tsx
<div className="mb-4 w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
  <ImageWithFallback
    src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=600&fit=crop"
    alt="Udang Segar Premium Dimsum Mustika"
    fallbackEmoji="🦐"
    className="w-full h-full object-cover"
  />
</div>
```

## Foto Unsplash yang Digunakan:
1. **Udang Segar**: https://images.unsplash.com/photo-1565680018434-b513d5e5fd47
2. **Daging Ayam**: https://images.unsplash.com/photo-1604503468506-a8da13d82791
3. **Dimsum/Resep**: https://images.unsplash.com/photo-1496116218417-1a781b1c416c

Setelah edit, save dan refresh browser!
