/**
 * Food and kitchen photography, all openly licensed on Wikimedia Commons. These
 * licences require credit, so every entry here appears on /credits. Replace
 * them with photos of a real Imli restaurant when those exist.
 */
export interface Photo {
  src: string;
  alt: string;
  author: string;
  licence: string;
  sourceUrl: string;
}

export const PHOTOS = {
  dosa: {
    src: "/photos/dosa.webp",
    alt: "Masala dosa with sambar and chutney on a banana leaf",
    author: "Contrapunctus-1",
    licence: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Rava_onion_masala_dosa_at_Udupi_Upahar,_Wilson_Garden,_Bangalore_(2025-09-19).jpg",
  },
  idli: {
    src: "/photos/idli.webp",
    alt: "Idli with sambar and chutney on a banana leaf",
    author: "Contrapunctus-1",
    licence: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Idli_at_Udupi_Upahar,_Wilson_Garden,_Bangalore_(2025-09-19).jpg",
  },
  vada: {
    src: "/photos/vada.webp",
    alt: "A steel bowl of crisp vada",
    author: "kalyan (Flickr)",
    licence: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Uzhunnu_vada.jpg",
  },
  biryani: {
    src: "/photos/biryani.webp",
    alt: "A plate of Hyderabadi dum biryani with raita",
    author: "Mahi Tatavarty",
    licence: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%22Hyderabadi_Dum_Biryani%22.jpg",
  },
  paneer: {
    src: "/photos/paneer.webp",
    alt: "Skewers of paneer tikka",
    author: "Namitakhaire",
    licence: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paneer_Tikka_Kabab.JPG",
  },
  lassi: {
    src: "/photos/lassi.webp",
    alt: "A tall glass of mango lassi beside a cup of tea",
    author: "JIP",
    licence: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mango_lassi_and_Nepalese_milk_tea_at_restaurant_Everest_Dine.jpg",
  },
  thali: {
    src: "/photos/thali.webp",
    alt: "A vegetarian thali served on a brass plate",
    author: "Vis M",
    licence: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Veg_Thali_Meals.jpg",
  },
  kitchen: {
    src: "/photos/kitchen.webp",
    alt: "Chefs at work in a busy open restaurant kitchen",
    author: "plusgood",
    licence: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:RTW2009-1088Delhi_(4325216633).jpg",
  },
} as const satisfies Record<string, Photo>;
