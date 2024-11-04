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
        if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    });
  });
</script>

<div id="navbar" class="bg-base-100 fixed flex w-full flex-row items-center px-8 py-4">
  <a class="logo-link h-[70px] w-[100px] overflow-hidden" aria-label="Home" href="/">
    <div class="hello">
      <HelloText />
    </div>
    <div class="logo ml-auto mr-auto w-1/2">
      <Logo />
    </div>
  </a>
  <ul class="ml-auto flex list-none content-center gap-4 text-xl">
    <li>
      <a class="hover:link hover:link-primary" href="/#section-3">About</a>
    </li>
    <li>
      <a class="hover:link hover:link-primary" href="/gallery">Gallery</a>
    </li>
    <li>
      <a class="hover:link hover:link-primary" href="https://blog.logolicusz.com">Blog</a>
    </li>
  </ul>
</div>
