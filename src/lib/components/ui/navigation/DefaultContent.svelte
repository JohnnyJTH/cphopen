<script lang="ts">
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  export let items: { href: string; label: string; description: string }[];
</script>

<div>
  <ul class="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
    {#each items as item}
      <li>
        <a
          href={item.href}
          class={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/60 hover:text-primary',
            $page.url.pathname === item.href && 'bg-accent/60 text-primary'
          )}
        >
          <div class="text-sm font-bold leading-none">{item.label}</div>
          <p class="text-sm leading-snug line-clamp-2 text-muted-foreground">{item.description}</p>
        </a>
      </li>
    {/each}
  </ul>
</div>
