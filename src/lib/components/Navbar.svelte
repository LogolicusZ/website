<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Logo from "$assets/Logo.svelte";
  import HelloText from "$assets/HelloText.svelte";
  import "$styles/components/navbar.scss";

  const menuOpen = writable(false);

  function toggleMenu() {
    menuOpen.update((val) => !val);
  }

  onMount(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const scrollDistanceRem =
          window.scrollY / parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollDistanceRem > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    });
  });
</script>

<style>
  /* Optional: fallback styles if Tailwind is not used */
  .mobile-nav-toggle {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }
    .mobile-nav-toggle {
      display: block;
    }
  }
</style>

<div id="navbar" class="fixed z-50 flex w-full flex-wrap items-center bg-base-100/60 px-8 py-4 backdrop-blur-md">
  <a class="logo-link h-[70px] w-[100px] overflow-hidden" aria-label="Home" href="/">
    <div class="hello h-[70px] flex items-center justify-center">
      <span class="text-4xl"> Heyo! </span>
    </div>
    <div class="logo ml-auto mr-auto w-1.75 flex justify-center items-center light:invert">
      <Logo />
    </div>
  </a>

  <!-- Hamburger button -->
  <button class="ml-auto mobile-nav-toggle text-3xl md:hidden" on:click={toggleMenu} aria-label="Toggle menu">
    ☰
  </button>

  <!-- Desktop nav -->
  <ul class="desktop-nav ml-auto hidden md:flex list-none content-center gap-4 text-xl font-extralight">
    <li><a class="hover:link hover:link-primary" href="/#about">About</a></li>
    <li><a class="hover:link hover:link-primary" href="/gallery">Gallery</a></li>
    <li><a class="hover:link hover:link-primary" href="https://blog.logolicusz.com">Blog</a></li>
     <li><a class="hover:link hover:link-primary" href="https://krchv.logolicusz.com">Krchv</a></li>
  </ul>

  <!-- Mobile nav -->
  {#if $menuOpen}
    <ul class="w-full mt-4 flex flex-col items-start gap-3 text-lg font-light md:hidden">
      <li><a class="hover:link hover:link-primary" href="/#about">About</a></li>
      <li><a class="hover:link hover:link-primary" href="/gallery">Gallery</a></li>
      <li><a class="hover:link hover:link-primary" href="https://blog.logolicusz.com">Blog</a></li>
      <li><a class="hover:link hover:link-primary" href="https://blog.logolicusz.com">Krchv</a></li>
    </ul>
  {/if}
</div>
