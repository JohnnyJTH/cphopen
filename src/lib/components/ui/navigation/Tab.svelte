<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';
  import { handleSetSelected, selected } from '.';

  export let tab: number;
</script>

<button
  id={`tab-${tab}`}
  on:mouseenter={() => handleSetSelected(tab)}
  on:click={() => handleSetSelected(tab)}
  class={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
    $selected === tab ? ' bg-neutral-800 text-neutral-100' : 'text-neutral-400'
  }`}
>
  <span>
    <slot />
  </span>
  <ChevronDown class={`transition-transform ${$selected === tab ? 'rotate-180' : ''}`} />
</button>
