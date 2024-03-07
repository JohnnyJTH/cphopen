<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';
  import { handleSetSelected, selected } from '.';
  import { includesAny } from '$lib/utils';
  import { page } from '$app/stores';

  export let tab: {
    id: number;
    label: string;
    items: { href: string; label: string; description: string }[];
  };
</script>

<button
  id={`tab-${tab.id}`}
  on:mouseenter={() => handleSetSelected(tab.id)}
  on:click={() => handleSetSelected(tab.id)}
  class={`flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${
    includesAny(
      $page.url.pathname,
      tab.items.map((item) => item.href)
    )
      ? 'text-primary underline underline-offset-4'
      : $selected === tab.id
        ? 'text-primary'
        : 'text-foreground'
  }`}
>
  <span>
    <slot />
  </span>
  <ChevronDown
    class={`scale-75 transition-transform ${$selected === tab.id ? 'rotate-180' : ''}`}
  />
</button>
