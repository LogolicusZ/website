// +page.ts or +page.server.ts
import imageAltsData from '$lib/json/gallery.json';
import { getImageSize } from '$lib/utils/getImageSize';

interface ImageAlts {
  [key: string]: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export async function load() {
  const imageAlts: ImageAlts = imageAltsData;
  const imageFiles = Object.keys(imageAlts);

  const galleryImages: GalleryImage[] = await Promise.all(
    imageFiles.map(async (filename) => {
      const src = `/assets/img/gallery/${filename}`;
      try {
        const { width, height } = await getImageSize(src);
        return {
          src,
          alt: imageAlts[filename] || `Image ${filename}`,
          width,
          height,
        };
      } catch {
        // fallback if image can't be loaded
        return {
          src,
          alt: imageAlts[filename] || `Image ${filename}`,
          width: 1200,
          height: 800,
        };
      }
    })
  );

  return { galleryImages };
}
