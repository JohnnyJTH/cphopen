<script lang="ts">
  import * as Carousel from '$lib/components/ui/carousel';
  import { ChevronRight } from 'lucide-svelte';

  const NEWS = [
    {
      title: '11/3: Qualify for the Copenhagen Open!',
      description: `Registration is open for the Copenhagen Open 2024 Qualification Tournament.
        Register now to get a chance to win a spot in the tournament.`,
      link: 'https://discgolfmetrix.com/2852767'
    }
  ];
</script>

<div class="max-w-3xl mx-auto space-y-4">
  <Carousel.Root class="w-full pt-4" opts={{ loop: true }}>
    <Carousel.Content>
      {#each NEWS as entry}
        <Carousel.Item class="text-black select-none">
          <svelte:element
            this={entry.link ? 'a' : 'div'}
            href={entry.link}
            class="flex w-full h-full items-center justify-between gap-4 rounded-md bg-primary p-4 {entry.link &&
              'cursor-pointer hover:bg-primary/90'}"
          >
            <div>
              <h2 class="text-xl font-bold unstyled md:text-3xl">{entry.title}</h2>
              <p class="mb-16 text-sm">{entry.description}</p>
            </div>
            <div>
              {#if entry.link}
                <ChevronRight class="w-12 h-12" />
              {/if}
            </div>
          </svelte:element>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous variant="secondary" />
    <Carousel.Next variant="secondary" />
    <Carousel.Dots variant="secondary" />
  </Carousel.Root>
  <div>
    <h2>Welcome to the Copenhagen Open</h2>
    <p>
      You are one of the 136 players in the all sold out first event of the inaugural Disc Golf Pro Tour Europe, Copenhagen Open 2024.
    </p>
      In the top menu you can find information regarding schedule, course layout and practical information surrounding the tournament about accommodation, food etc.<br>
      This information will be published continuously, when they are set.
    </p>
    <p>
      We are delighted to be hosting you and the rest of the field!
    </p>
  </div>
</div>
