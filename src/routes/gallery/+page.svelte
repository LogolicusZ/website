<script context="module" lang="ts">
  import imageAltsData from "$lib/json/gallery.json";
</script>

<script lang="ts">
  import "$styles/gallery/index.scss";
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
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

  const imageAlts: ImageAlts = imageAltsData;

  let galleryImages: GalleryImage[] = [];
  let loading = true;
  let lightbox: PhotoSwipeLightbox | undefined;

  async function buildGalleryImages() {
    const imageFiles = Object.keys(imageAlts);

    const results = await Promise.all(
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
    galleryImages = results;
    loading = false;
  }

  onMount(() => {
    buildGalleryImages().then(() => {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  });
</script>

<div class="flex flex-col items-center gap-16">
  <h1 class="text-8xl font-medium">Gallery</h1>
  {#if loading}
    <p>Loading images...</p>
  {:else}
    <div id="gallery" class="image-container">
      {#each galleryImages as image}
        <a
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noopener"
        >
          <img src={image.src} alt={image.alt} />
        </a>
      {/each}
    </div>
  {/if}
</div>