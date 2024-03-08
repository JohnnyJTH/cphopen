<script lang="ts">
  import { cn } from '$lib/utils';
  import { getEmblaContext } from './context.js';

  let className: string | undefined = undefined;
  export { className as class };
  export let variant: 'default' | 'secondary' = 'default';
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
      style:--box-shadow-active={variant === 'default' ? '48 100% 60%' : '210 100% 20%'}
      style:--box-shadow={variant === 'default' ? 'white' : 'white'}
      on:click={() => $api?.scrollTo(i)}
      class="dot-box-shadow flex h-6 w-6 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-full bg-transparent after:h-4 after:w-4 after:rounded-full after:content-[''] {i ===
        current && 'dot-box-shadow-active'}"
    />
  {/each}
</div>

<style>
  .dot-box-shadow:after {
    box-shadow: inset 0 0 0 0.2rem var(--box-shadow);
  }

  .dot-box-shadow-active:after {
    box-shadow: inset 0 0 0 0.2rem hsl(var(--box-shadow-active));
  }
</style>
