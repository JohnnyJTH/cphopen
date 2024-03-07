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
    class="z-50 absolute left-0 top-[calc(100%_+_64px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
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
