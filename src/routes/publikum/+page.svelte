<script lang="ts">
  import Autoplay from 'embla-carousel-autoplay';
  import * as Carousel from '$lib/components/ui/carousel';
  import { ChevronRight } from 'lucide-svelte';

  const CAROUSEL_ITEMS: { title: string; description: string; image: string; link?: string }[] = [
    {
      title: 'Copenhagen Open',
      description:
        'Copenhagen Open er første stop på den helt nye, meget prestigefyldte tour: Disc Golf Pro Tour Europe 2024.',
      image: '/images/ept2023_women-top2.jpg'
    },
    {
      title: 'Titel 2',
      description: 'Stemningsbillede fra Valbyparken',
      image: 'https://via.placeholder.com/1600x800'
    }
  ];
</script>

<div class="space-y-4">
  <div class="flex flex-col items-center 2xl:w-3/4 mx-auto">
    <Carousel.Root
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 10000
        })
      ]}
    >
      <Carousel.Content>
        {#each CAROUSEL_ITEMS as entry}
          <Carousel.Item class="select-none">
            <svelte:element
              this={entry.link ? 'a' : 'div'}
              href={entry.link}
              class="absolute top-4 flex w-3/4 items-center justify-between rounded-r-md bg-background/60 p-4 {entry.link &&
                'cursor-pointer hover:bg-background/80'}"
            >
              <div>
                <h2 class="text-xl font-bold unstyled md:text-3xl">{entry.title}</h2>
                <p class="!m-0 text-sm">{entry.description}</p>
              </div>
              <div>
                {#if entry.link}
                  <ChevronRight />
                {/if}
              </div>
            </svelte:element>
            <img src={entry.image} alt={entry.title} />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous class="hidden md:inline-flex" />
      <Carousel.Next class="hidden md:inline-flex" />
      <Carousel.Dots />
    </Carousel.Root>
  </div>
  <div class="flex flex-col 2xl:w-1/2 mx-auto">
    <h2>Europas største disc golf-turnering kommer igen forbi København</h2>
    <p>
      Fra fredag den 10. maj til søndag den 12. maj 2024 spiller Europas bedste disc golf-spillere
      Copenhagen Open i Valbyparken. Den traditionsrige turnering er første stop på den nyetablerede
      Disc Golf Pro Tour Europe.
    </p>
  </div>
</div>
