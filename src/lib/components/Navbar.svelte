<script lang="ts">
  import { onMount } from "svelte";
  import Logo from "$assets/Logo.svelte";
  import HelloText from "$assets/HelloText.svelte";
  import "$styles/components/navbar.scss";

  onMount(() => {
    // check if the nav is scrolled, and if yes, add the .scrolled class
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const scrollDistanceRem = window.scrollY / parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollDistanceRem > 0) {
          // adjust this value to your desired rem threshold
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    });
  });
</script>

<div id="navbar" class="fixed z-50 flex w-full flex-row items-center bg-base-100/60 px-8 py-4 backdrop-blur-md">
  <a class="logo-link h-[70px] w-[100px] overflow-hidden" aria-label="Home" href="/">
    <div class="hello h-[70px] flex items-center justify-center">
      <!-- <HelloText /> -->
      <span class="text-4xl"> Heyo! </span>
    </div>
    <div class="logo ml-auto mr-auto w-1.75 flex justify-center items-center  light:invert">
      <Logo />
    </div>
  </a>
  <ul class="ml-auto flex list-none content-center gap-4 text-xl font-extralight">
    <li>
      <a class="hover:link hover:link-primary" href="/#about">About</a>
    </li>
    <li>
      <a class="hover:link hover:link-primary" href="/gallery">Gallery</a>
    </li>
    <li>
      <a class="hover:link hover:link-primary" href="https://blog.logolicusz.com">Blog</a>
    </li>
  </ul>
</div>
