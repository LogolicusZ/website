<script lang="ts">
  import { onMount } from "svelte";
  import Discord from "$assets/Discord.svelte";
  import Instagram from "$assets/Instagram.svelte";
  import Github from "$assets/Github.svelte";
  import "$styles/components/footer.scss";
</script>

<div class="z-50 mt-auto flex w-full bg-base-300">
  <span class="text-2xl">&copy; LogolicusZ 2024</span>
  <div class="links ml-auto flex gap-2">
    <a class="discord" href="https://discord.com/invite/DC6RCWmgNd">
      <Discord />
    </a>
    <a class="instagram" href="https://instagram.com/logolicusz">
      <Instagram />
    </a>
    <a class="github" href="https://github.com/LogolicusZ">
      <Github />
    </a>
  </div>
</div>
