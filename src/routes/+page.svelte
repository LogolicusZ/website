<!-- TODO: CREATE NAMES FOR IMAGES --->
<script lang="ts">
  import type { CarouselOptions, CarouselItems } from "$lib/types";
  import Carousel from "$components/Carousel.svelte";
  import "$styles/index.scss";

  import IconArrowDown from "svelte-material-icons/ArrowDown.svelte";
  import IconArrowRight from "svelte-material-icons/ArrowRight.svelte";

  // carousel gallery items
const slides: CarouselItems[] = [
  {
    title: "<bird-flowers>",
    image: "/assets/img/gallery/img_78.avif",
  },
  {
    title: "<madrid-sky>",
    image: "/assets/img/gallery/img_57.avif",
  },
  {
    title: "<orange-stairs>",
    image: "/assets/img/gallery/img_19.avif",
  },
  {
    title: "<windows-basketball1>",
    image: "/assets/img/gallery/img_49.avif",
  },
  {
    title: "<car-peak>",
    image: "/assets/img/gallery/img_60.avif",
  },
  {
    title: "<neon-sign>",
    image: "/assets/img/gallery/img_89.avif",
  },
  {
    title: "<fence-glow>",
    image: "/assets/img/gallery/img_43.avif",
  },
  {
    title: "<green-hill-train>",
    image: "/assets/img/gallery/img_9.avif",
  },
  {
    title: "<pigeons-flight>",
    image: "/assets/img/gallery/img_38.avif",
  },
  {
    title: "<lights-shadow>",
    image: "/assets/img/gallery/img_56.avif",
  }
];


  // carousel gallery options
const slideOptions: CarouselOptions = {
  type: "loop",
  focus: "center",
  perPage: 3,
  autoplay: true,
  autoplayInterval: 4500,
  gap: "0.5rem",
  width: "100%", // Use relative units for responsiveness
  height: "auto",
  padding: "2%",
  updateOnMove: true,
  breakpoints: {
    1280: {
      perPage: 3,
    },
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
      padding: "5%",
      height:"9%"
    },
  },
};

</script>

<svelte:head>
  <title>LogolicusZ's Landing Zone</title>
  <meta name="title" content="LogolicusZ's Landing Zone" />
  <meta name="description" content="Hey come checkout my stuff!" />
</svelte:head>

<div class="mb-32 flex h-dvh items-center justify-center">
  <h1 class="flex flex-col items-center gap-2">
    <span class="text-4xl ">Hi there, I'm</span>
    <span
      id="logolicuszHeader"
      class="tracking-1 text-[4rem] f transition-all duration-500 ease-in-out md:text-[6rem] lg:text-[10rem]">
      LogolicusZ
    </span>
    <a href="#pictures">
      <IconArrowDown size="2.5rem" />
    </a>
  </h1>
</div>

<div
  id="pictures"
  class="mb-32 flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center"
>
  <h2 class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-medium text-center">Pictures</h2>
  <Carousel options={slideOptions} {slides} />
  <a class="btn btn-primary btn-lg mt-4" href="/gallery">
    <IconArrowRight size="1.25rem" /> See more
  </a>
</div>


<div id="about" class="mb-32 flex min-h-screen flex-col items-center justify-center gap-16 px-4">
  <h2 class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-medium text-center">About me</h2>
  <div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
    <img
      class="h-80 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-auto object-contain"
      src="/assets/img/aboutme.PNG"
      alt="I'm on a grassy field holding a camera, with trees in the background." />
    <ul class="flex flex-col justify-center gap-6 text-xl sm:text-2xl md:text-2.5xl font-extralight text-center lg:text-left">
      <li><span class="mr-2 select-none">🇨🇭</span> Based In Switzerland</li>
      <li><span class="mr-2 select-none">🛠️</span> Studying System Engineering</li>
      <li><span class="mr-2 select-none">⌨️</span> Keyboard Enjoyer</li>
      <li><span class="mr-2 select-none">🪐</span> BIG Star Wars Nerd</li>
      <li><span class="mr-2 select-none">🖥️</span> Freelance Web Dev</li>
      <li><span class="mr-2 select-none">🎨</span> Designer / Artist</li>
    </ul>
  </div>
</div>
