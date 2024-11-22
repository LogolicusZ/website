<script lang="ts">
  import IconDiscord from "$assets/Discord.svelte";
  import IconInstagram from "$assets/Instagram.svelte";
  import IconGithub from "$assets/Github.svelte";
  import IconArrowUp from "svelte-material-icons/ArrowUp.svelte";
  import "$styles/components/footer.scss";
</script>

<div class="z-50 mt-auto flex w-full items-center rounded-t-xl px-8 py-3">
  <span class="text-xl">&copy; LogolicusZ 2024</span>
  <div class="links ml-auto flex gap-2">
    <a
      class="btn btn-square btn-md border-none bg-neutral-800 text-white hover:bg-neutral-700"
      href="https://discord.com/invite/DC6RCWmgNd">
      <IconDiscord />
    </a>
    <a
      class="btn btn-square btn-md border-none bg-neutral-800 text-white hover:bg-neutral-700"
      href="https://instagram.com/logolicusz">
      <IconInstagram />
    </a>
    <a
      class="btn btn-square btn-md border-none bg-neutral-800 text-white hover:bg-neutral-700"
      href="https://github.com/LogolicusZ">
      <IconGithub />
    </a>
    <a class="btn btn-square btn-primary btn-md" href="#top">
      <IconArrowUp size="1.5rem" />
    </a>
  </div>
</div>
