<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { selected } from '.';

  let left = 0;
  $: if ($selected) {
    const hoveredTab = document.getElementById(`tab-${$selected}`);
    const overlayContent = document.getElementById('tab-content');
    if (hoveredTab && overlayContent) {
      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      left = tabCenter;
    }
  }
</script>

{#if left !== 0}
  <Motion animate={{ left }} transition={{ duration: 0.25, ease: 'easeInOut' }} let:motion>
    <span
      class="absolute top-0 w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 border rounded-tl left-1/2 border-accent bg-background"
      style="clip-path: polygon(0 0, 100% 0, 50% 50%, 0% 100%);"
      use:motion
    />
  </Motion>
{/if}
