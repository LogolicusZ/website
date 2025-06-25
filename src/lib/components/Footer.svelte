<script lang="ts">
  import IconDiscord from "$assets/Discord.svelte";
  import IconInstagram from "$assets/Instagram.svelte";
  import IconGithub from "$assets/Github.svelte";
  import IconArrowUp from "svelte-material-icons/ArrowUp.svelte";
  import "$styles/components/footer.scss";
</script>

<footer class="z-50 mt-auto w-full rounded-t-xl bg-transparent px-4 py-3">
  <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
    <span class="text-center text-base sm:text-xl">&copy; LogolicusZ 2024</span>
    <div class="flex flex-wrap justify-center gap-2">
      <a
        class="btn btn-square btn-md border-none bg-neutral-800 text-white hover:bg-neutral-700"
        href="https://discord.com/invite/DC6RCWmgNd"
        aria-label="Discord">
        <IconDiscord />
      </a>
      <a
        class="btn btn-square btn-md border-none bg-neutral-800 text-white hover:bg-neutral-700"
        href="https://instagram.com/logolicusz"
        aria-label="Instagram">
        <IconInstagram />
      </a>
      <a
        class="btn btn-square btn-md border-none bg-neutral-800 text-white hover:bg-neutral-700"
        href="https://github.com/LogolicusZ"
        aria-label="GitHub">
        <IconGithub />
      </a>
      <a
        class="btn btn-square btn-primary btn-md"
        href="#top"
        aria-label="Back to top">
        <IconArrowUp size="1.5rem" />
      </a>
    </div>
  </div>
</footer>
