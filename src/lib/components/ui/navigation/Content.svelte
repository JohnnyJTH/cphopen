<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { Arrow, Bridge, DefaultContent, dir, selected } from '.';

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
    id="tab-content"
    class="absolute -left-[10vh] top-[calc(100%_+_10px)] z-50 rounded-lg border border-accent bg-background p-4"
    use:motion
  >
    <Bridge />
    <Arrow />
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
