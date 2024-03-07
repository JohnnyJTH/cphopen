<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { Bridge, DefaultContent, dir, selected } from '.';

  export let tabs: {
    id: number;
    label: string;
    items: { href: string; label: string; description: string }[];
  }[] = [];
</script>

<Motion
  initial={{
    opacity: 0,
    y: 8
  }}
  animate={{
    opacity: 1,
    y: 0
  }}
  exit={{
    opacity: 0,
    y: 8
  }}
  let:motion
>
  <div
    class="z-50 absolute -left-[10vh] top-[calc(100%_+_10px)] rounded-lg border border-neutral-600 bg-background p-4"
    use:motion
  >
    <Bridge />
    {#each tabs as tab}
      <div class="overflow-hidden">
        {#if $selected === tab.id}
          <Motion
            initial={{ opacity: 0, x: $dir === 'l' ? '100' : $dir === 'r' ? -100 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            let:motion
          >
            <div use:motion>
              <DefaultContent items={tab.items} />
            </div>
          </Motion>
        {/if}
      </div>
    {/each}
  </div>
</Motion>
