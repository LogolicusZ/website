import type { Options } from "@splidejs/svelte-splide";

// carousel
interface CarouselItems {
  /**
   * The slide item's name, used in the image alt attribute.
   */
  title: string;
  /**
   * The slide item's source, used in the image src attribute.
   */
  image: string;
}

interface CarouselOptions extends Options {
  /**
   * Sets the autoplay interval in milliseconds.
   */
  autoplayInterval: number | undefined;
}

export type { CarouselItems, CarouselOptions };
