<script lang="ts">
  import "../styles/app.scss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
</svelte:head>

<Navbar />
<div class="p-8 pt-[6.375rem]">
  {@render children()}
</div>
<Footer />
