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
      image: "/assets/img/gallery/pic05.avif",
    },
    {
      title: "<madrid-sky>",
      image: "/assets/img/gallery/pic33.avif",
    },
    {
      title: "<orange-stairs>",
      image: "/assets/img/gallery/pic07.avif",
    },
    {
      title: "<windows-basketball1>",
      image: "/assets/img/gallery/pic03.avif",
    },
    {
      title: "<car-peak>",
      image: "/assets/img/gallery/pic10.avif",
    },
  ];

  // carousel gallery options
  const slideOptions: CarouselOptions = {
    type: "loop",
    focus: "center",
    perPage: 3,
    autoplay: true,
    autoplayInterval: 3000,
    gap: "1rem",
    width: "100rem",
    padding: "2%",
    updateOnMove: true,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
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
    <span class="text-4xl">Hi there, I'm</span>
    <span
      id="logolicuszHeader"
      class="tracking-1 text-[4rem] font-medium italic transition-all duration-500 ease-in-out md:text-[8rem] lg:text-[12rem]">
      LogolicusZ
    </span>
    <a href="#pictures">
      <IconArrowDown size="2.5rem" />
    </a>
  </h1>
</div>

<div id="pictures" class="mb-32 flex h-dvh flex-col items-center justify-center gap-8">
  <h2 class="mb-8 text-8xl font-medium">Pictures</h2>
  <Carousel options={slideOptions} {slides} />
  <a class="btn btn-primary btn-lg" href="/gallery"><IconArrowRight size="1.25rem" /> See more</a>
</div>

<div id="about" class="mb-32 flex h-dvh flex-col items-center justify-center gap-16 ">
  <h2 class="text-8xl font-medium">About me</h2>
  <div class="flex flex-col justify-center gap-12 lg:flex-row">
    <img
      class="h-[36rem] w-[auto]"
      src="/assets/img/aboutme.PNG"
      alt="I'm on a grassy field holding a camera, with trees in the background." />
    <ul class="flex flex-col justify-center gap-8 text-4xl font-extralight">
      <li>
        <span class="mr-2 select-none">🇨🇭</span>
        Based In Switzerland
      </li>
      <li>
        <span class="mr-2 select-none">🛠️</span>
        Studying System Engineering
      </li>
      <li>
        <span class="mr-2 select-none">⌨️</span>
        Keyboard Enjoyer
      </li>
      <li>
        <span class="mr-2 select-none">🪐</span>
        BIG Star Wars Nerd
      </li>
      <li>
        <span class="mr-2 select-none">🖥️</span>
        Freelance Web Dev
      </li>
      <li>
        <span class="mr-2 select-none">🎨</span>
        Designer / Artist
      </li>
    </ul>
  </div>
</div>
