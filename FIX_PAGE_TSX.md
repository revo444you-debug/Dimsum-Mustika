# Cara Memperbaiki app/page.tsx

File page.tsx rusak karena ada karakter `\`n` yang seharusnya newline.

## Solusi Tercepat:

1. Buka file `app/page.tsx`
2. Cari baris sekitar 282 yang berisi:
```tsx
<article className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-red-900 border-4 border-white relative overflow-hidden">`n              {/* Background Image */}`n              <div className="absolute inset-0 opacity-20">`n                <ImageWithFallback`n                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"`n                  alt="Restaurant Location"`n                  fallbackEmoji="📍"`n                  className="w-full h-full object-cover"`n                />`n              </div>`n              `n              <div className="relative z-10">
```

3. **GANTI SELURUH BAGIAN TERSEBUT** dengan:
```tsx
<article className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-red-900 border-4 border-white relative overflow-hidden">
  <div className="absolute bottom-4 left-4 text-6xl opacity-20" aria-hidden="true">📍</div>
  <div className="relative z-10">
```

4. Cari baris yang berisi:
```tsx
              </a>`n              </div></article>
```

5. Ganti dengan:
```tsx
              </a>
            </div>
          </article>
```

6. Ganti semua emoji yang rusak:
   - `ðŸ"` → `📍`
   - `ðŸ"ž` → `📞`
   - `ðŸŒ¸` → `🌸`
   - `ðŸ—` → `🍗`
   - `ðŸ"œ` → `📜`

7. Save file dan refresh browser

## Atau gunakan Find & Replace:
- Find: `` `n ``
- Replace with: (newline/enter)

Lakukan ini beberapa kali sampai semua `` `n `` hilang.
