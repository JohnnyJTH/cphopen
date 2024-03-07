<script lang="ts">
  import { Content, Tab, handleSetSelected, selected } from '.';

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
    <Tab tab={tab}>{tab.label}</Tab>
  {/each}
  {#if $selected}
    <Content {tabs} />
  {/if}
</div>
