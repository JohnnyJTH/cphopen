<script lang="ts">
  import { Facebook, Instagram, TicketPercent } from 'lucide-svelte';
  import { Button } from './ui/button';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';

  let year = new Date().getFullYear();

  $: isHomePage = $page.url.pathname === '/';
  let windowWidth: number;
  $: isMobile = windowWidth < 1024;

  let rotationIndex = 0;
  let interval: number;
  onMount(() => {
    interval = setInterval(() => {
      rotationIndex = rotationIndex === 3 ? 0 : rotationIndex + 1;
    }, 5000);
    return () => clearInterval(interval);
  });

  const customTransition = (node: HTMLElement, { delay = 0 } = {}) => {
    return isMobile ? fade(node, { delay }) : slide(node, { delay });
  };
</script>

<svelte:window bind:innerWidth={windowWidth} />

<footer
  id="footer"
  class="h-16 border-t border-accent bg-background/75 backdrop-blur-md {isHomePage
    ? 'sticky bottom-0'
    : 'bg-popover/75'}"
>
  <div class="flex flex-row items-center justify-between w-full h-full page-container">
    {#if rotationIndex === 0}
      {#await new Promise((resolve) => setTimeout(resolve, 400))}
        <div class="w-1 h-1 bg-transparent" />
      {:then}
        <span in:customTransition out:customTransition class="text-muted-foreground"
          >© {year} KFK Disc Golf</span
        >
      {/await}
    {:else if rotationIndex === 1}
      {#await new Promise((resolve) => setTimeout(resolve, 400))}
        <div class="w-1 h-1 bg-transparent" />
      {:then}
        <span in:customTransition out:customTransition class="text-muted-foreground"
          >© {year} KFK Disc Golf</span
        >
      {/await}
    {:else if rotationIndex === 2}
      {#await new Promise((resolve) => setTimeout(resolve, 400))}
        <div class="w-1 h-1 bg-transparent" />
      {:then}
        <span in:customTransition out:customTransition class="text-muted-foreground"
          >© {year} KFK Disc Golf</span
        >
      {/await}
    {:else}
      {#await new Promise((resolve) => setTimeout(resolve, 400))}
        <div class="w-1 h-1 bg-transparent" />
      {:then}
        <span in:customTransition out:customTransition class="text-muted-foreground"
          >© {year} KFK Disc Golf</span
        >
      {/await}
    {/if}
    <ul class="flex flex-wrap items-center text-sm font-medium">
      <li>
        <Button
          title="Facebook"
          target="_blank"
          href="https://www.facebook.com/cphopen.dk"
          variant="link-active"
        >
          <Facebook />
        </Button>
      </li>
      <li>
        <Button
          title="Instagram"
          target="_blank"
          href="https://www.instagram.com/copenhagenopendiscgolf/"
          variant="link-active"
        >
          <Instagram />
        </Button>
      </li>
      <li>
        <Button
          title="DGPT"
          target="_blank"
          href="https://www.dgpt.com/event/2024-copenhagen-open/"
          variant="link-active"
        >
          <TicketPercent />
        </Button>
      </li>
    </ul>
  </div>
</footer>
