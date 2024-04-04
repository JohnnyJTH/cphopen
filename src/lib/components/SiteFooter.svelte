<script lang="ts">
  import { Facebook, Instagram, TicketPercent } from 'lucide-svelte';
  import { Button } from './ui/button';
  import { page } from '$app/stores';

  let year = new Date().getFullYear();

  $: isHomePage = $page.url.pathname === '/forside'
</script>

<footer
  id="footer"
  class="h-16 border-t border-accent bg-background/75 backdrop-blur-md {$page.url.pathname === '/'
    ? 'sticky bottom-0'
    : 'bg-popover/75'}"
>
  <div class="flex flex-row items-center justify-between w-full h-full page-container">
    {#if isHomePage}
      <div class="space-x-8 text-xl lg:space-x-16">
        <span>Sponsor 1</span>
        <span>Sponsor 2</span>
        <span>Sponsor 3</span>
      </div>
    {:else}
      <span class="text-muted-foreground md:text-center">© {year} KFK Disc Golf</span>
    {/if}
    <ul class="flex flex-wrap items-center text-sm font-medium md:mt-0 {isHomePage && 'hidden sm:flex'}">
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
