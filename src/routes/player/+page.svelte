<script lang="ts">
  import Autoplay from 'embla-carousel-autoplay';
  import { Button } from '$lib/components/ui/button';
  import * as Carousel from '$lib/components/ui/carousel';

  const NEWS = [
    {
      title: 'Hjem',
      description: 'Eksempel der linker til hjem',
      image: 'https://via.placeholder.com/1920x1080', // kan også være lokalt (/images/...)
      link: { href: '/', label: 'Go back to home' }
    },
    {
      title: 'Title 2',
      description: 'Nyhed uden link',
      image: 'https://via.placeholder.com/1920x1080'
    }
  ];
</script>

<div class="space-y-16">
  <div class="flex flex-col items-center">
    <Carousel.Root
      class="w-10/12"
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
            <div
              class="absolute flex items-center justify-between w-3/4 p-4 top-4 rounded-r-md bg-background/50"
            >
              <div>
                <h2 class="text-3xl font-bold unstyled">{entry.title}</h2>
                <p>{entry.description}</p>
              </div>
              <div>
                {#if entry.link}
                  <Button href={entry.link.href}>{entry.link.label ?? 'Read more'}</Button>
                {/if}
              </div>
            </div>
            <img src={entry.image} alt={entry.title} />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
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
