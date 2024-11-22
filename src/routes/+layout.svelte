<script lang="ts">
  import "../styles/app.scss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { page } from "$app/stores";

  let { children } = $props();
  let isRootPage = $derived($page.url.pathname === "/");
</script>

<svelte:head>
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex h-dvh flex-col">
  <Navbar />
  <div class="p-8" class:pt-[6.375rem]={!isRootPage}>
    {@render children()}
  </div>
  <Footer />
</div>
