<script lang="ts">
  import { Content, Tab, handleSetSelected, selected } from '.';
  import { AnimatePresence } from 'svelte-motion';

  export let tabs: {
    id: number;
    label: string;
    items: { href: string; label: string; description: string }[];
  }[] = [];
</script>

<div
  class="relative flex gap-2 h-fit"
  role="navigation"
  on:mouseleave={() => handleSetSelected(null)}
>
  {#each tabs as tab}
    <Tab tab={tab.id}>{tab.label}</Tab>
  {/each}
  <AnimatePresence>
    {#if $selected}
      <Content {tabs} />
    {/if}
  </AnimatePresence>
</div>
