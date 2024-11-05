<script lang="ts">
  import IconArrowDown from "svelte-material-icons/ArrowDown.svelte";
  import "$styles/index.scss";
</script>

<div class="flex h-full flex-col gap-32">
  <div class="flex h-[88dvh] items-center justify-center">
    <h1 class="flex flex-col items-center gap-2">
      <span class="text-4xl">Hi there, I'm</span>
      <span
        id="logolicuszHeader"
        class="tracking-1 text-[12rem] font-medium italic transition-all duration-500 ease-in-out">
        LogolicusZ
      </span>
      <IconArrowDown size="2.5rem" />
    </h1>
  </div>

  <div id="about" class="flex h-[88dvh] flex-col items-center justify-center gap-16">
    <h2 class="text-8xl font-semibold">About me</h2>
    <div class="flex justify-center gap-12">
      <img
        class="h-[36rem] w-[36rem]"
        src="/assets/img/aboutme.jpg"
        alt="I'm on a grassy field holding a camera, with trees in the background." />
      <ul class="flex flex-col justify-center gap-8 text-4xl">
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
</div>
