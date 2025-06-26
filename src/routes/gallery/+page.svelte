<script lang="ts">
  import "$styles/gallery/index.scss";
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
  import { onMount } from "svelte";

  export let data: {
    galleryImages: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }[]
  };

  let lightbox: PhotoSwipeLightbox | undefined;

  onMount(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      if (lightbox) lightbox.destroy();
    };
  });
</script>

<div class="flex flex-col items-center gap-16">
  <h1 class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-medium text-center">Gallery</h1>
  <div id="gallery" class="image-container">
    {#each data.galleryImages as image}
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
</div>
