<script context="module">
  import imageAltsData from "$lib/json/gallery.json";
</script>

<script lang="ts">
  import "$styles/gallery/index.scss";

  const images = import.meta.glob("/static/assets/img/gallery/*");
  const imageAlts: ImageAlts = imageAltsData;
  const getAltText = (filename: string | undefined) => {
    if (!filename) return "No alt text set.";
    return imageAlts[filename] || `Image ${filename}`;
  };

  interface ImageAlts {
    [key: string]: string;
  }
</script>

<svelte:head>
  <title>Gallery | LogolicusZ's Space</title>
  <meta name="title" content="LogolicusZ's Gallery" />
  <meta name="description" content="Hey come checkout Pictures" />
</svelte:head>

<div class="flex flex-col items-center gap-16">
  <h1 class="text-8xl font-semibold">Gallery</h1>
  <div class="image-container">
    {#each Object.entries(images) as [path]}
      {@const filename = path.split("/").pop()}
      <a href={path.replace("/static", "")}>
        <img src={path.replace("/static", "")} alt={getAltText(filename)} />
      </a>
    {/each}
  </div>
</div>
