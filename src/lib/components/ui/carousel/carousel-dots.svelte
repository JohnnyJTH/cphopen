<script lang="ts">
  import { Button, type Props } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import { getEmblaContext } from './context.js';

  type $$Props = Props;

  let className: $$Props['class'] = undefined;
  export { className as class };
  const { api } = getEmblaContext('<Carousel.Dots/>');

  let current = 0;
  $: if ($api) {
    current = $api.selectedScrollSnap();
    $api.on('select', () => {
      current = $api?.selectedScrollSnap() ?? 0;
    });
  }
</script>

<div
  class={cn('absolute bottom-0 right-4 flex -translate-y-1/2 flex-wrap items-center', className)}
>
  {#each Array.from({ length: $api?.scrollSnapList().length ?? 0 }) as _, i}
    <button
      on:click={() => $api?.scrollTo(i)}
      class="dot-box-shadow flex h-6 w-6 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-full bg-transparent after:h-4 after:w-4 after:rounded-full after:content-[''] {i ===
        current && 'dot-box-shadow-primary'}"
    />
  {/each}
</div>

<style>
  .dot-box-shadow:after {
    box-shadow: inset 0 0 0 0.2rem white;
  }

  .dot-box-shadow-primary:after {
    box-shadow: inset 0 0 0 0.2rem hsl(var(--primary));
  }
</style>
