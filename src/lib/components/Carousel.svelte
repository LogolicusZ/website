<script lang="ts">
  import type { CarouselItems, CarouselOptions as Options } from "$lib/types";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import IconRightArrow from "svelte-material-icons/ArrowRight.svelte";
  import IconLeftArrow from "svelte-material-icons/ArrowLeft.svelte";
  import "@splidejs/svelte-splide/css/core";
  import "$styles/components/carousel.scss";

  export let options: Options = {
    type: "loop",
    focus: "center",
    perPage: 3,
    autoplay: true,
    autoplayInterval: 4500,
    gap: "1rem",
    width: "100rem",
    padding: "2%",
    updateOnMove: true,
  };
  export let slides: CarouselItems[];
</script>

<Splide hasTrack={false} class="noscript-hidden" {options} aria-label="Projects">
  <div class="splide-wrapper">
    <div class="splide__arrows splide__arrows--left">
      <button class="splide__arrow splide__arrow--prev">
        <IconLeftArrow size="1.25rem" />
      </button>
    </div>
    <div class="splide__arrows splide__arrows--right">
      <button class="splide__arrow splide__arrow--next">
        <IconRightArrow size="1.25rem" />
      </button>
    </div>
    <SplideTrack>
      {#each slides as slide}
        <SplideSlide data-splide-interval={options.autoplayInterval}>
          <div class="splide-link">
            <a href={slide.image}>
              <img src={slide.image} alt={slide.title} />
            </a>
          </div>
        </SplideSlide>
      {/each}
    </SplideTrack>
  </div>
  <ul class="splide__pagination"></ul>
</Splide>
