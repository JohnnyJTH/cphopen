<script lang="ts">
  import Autoplay from 'embla-carousel-autoplay';
  import * as Carousel from '$lib/components/ui/carousel';
  import { ChevronRight } from 'lucide-svelte';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context';

  const NEWS = [
    {
      title: 'Hjem',
      description: 'Eksempel der linker til hjem',
      image: 'https://via.placeholder.com/1920x1080', // kan også være lokalt (/images/...)
      link: '/'
    },
    {
      title: 'Title 2',
      description: 'Nyhed uden link',
      image: 'https://via.placeholder.com/1920x1080'
    }
  ];

  let api: CarouselAPI;
  let count = 0;
  let current = 0;

  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;
    api.on('select', () => {
      current = api.selectedScrollSnap() + 1;
    });
  }
</script>

<div class="space-y-16">
  <div class="flex flex-col items-center">
    <Carousel.Root
      bind:api
      class="w-full md:w-10/12"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
    >
      <Carousel.Content>
        {#each NEWS as entry}
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
  <div class="space-y-4">
    <h1>Welcome to the Copenhagen Open</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto incidunt tempora soluta
      eligendi exercitationem nam reprehenderit quas iste praesentium fuga at, veritatis consectetur
      ad laborum quia, id, autem a deleniti!
    </p>
  </div>
</div>
