import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimsum Mustika - Kualitas Bintang Lima, Harga Terjangkau | Udang Segar & Resep Warisan",
  description: "Dimsum Mustika menghadirkan pengalaman kuliner premium dengan udang segar pilihan, daging ayam berkualitas, dan resep warisan turun-temurun. Dimsum Mentai 25K, Gyoza 15K. Pesan di 085212508683 - Blok C 17 no 22. Cocok untuk acara spesial Anda!",
  keywords: "dimsum murah, dimsum enak, dimsum mentai, gyoza, dimsum party, dimsum mustika, pesan dimsum online, dimsum terjangkau, dimsum jakarta, catering dimsum",
  authors: [{ name: "Dimsum Mustika" }],
  openGraph: {
    title: "Dimsum Mustika - Dimsum Enak Mulai 15K",
    description: "Dimsum premium harga terjangkau. Menu favorit: Dimsum Mentai, Gyoza, Fresh Drink. Pesan sekarang!",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dimsum Mustika - Dimsum Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimsum Mustika - Dimsum Enak Mulai 15K",
    description: "Dimsum premium harga terjangkau. Pesan sekarang di 085212508683",
    images: ["https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dimsummustika.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
