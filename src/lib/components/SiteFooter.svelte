<script lang="ts">
  import { Facebook, Instagram, TicketPercent } from 'lucide-svelte';
  import { Button } from './ui/button';
  import { page } from '$app/stores';

  let year = new Date().getFullYear();
</script>

<footer
  id="footer"
  class="h-16 border-t border-accent bg-background/75 backdrop-blur-md {$page.url.pathname === '/'
    ? 'sticky bottom-0'
    : 'bg-popover/75'}"
>
  <div
    class="flex flex-row items-center justify-between w-full h-full max-w-screen-xl px-8 mx-auto"
  >
    <span class="text-gray-300 md:text-center">© {year} DGPT (?)</span>
    <ul class="flex flex-wrap items-center text-sm font-medium md:mt-0">
      <li>
        <Button
          title="Facebook"
          target="_blank"
          href="https://www.facebook.com/cphopen.dk"
          variant="link"
        >
          <Facebook />
        </Button>
      </li>
      <li>
        <Button
          title="Instagram"
          target="_blank"
          href="https://www.instagram.com/copenhagenopendiscgolf/"
          variant="link"
        >
          <Instagram />
        </Button>
      </li>
      <li>
        <Button
          title="DGPT"
          target="_blank"
          href="https://www.dgpt.com/event/2024-copenhagen-open/"
          variant="link"
        >
          <TicketPercent />
        </Button>
      </li>
    </ul>
  </div>
</footer>
