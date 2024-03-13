<script lang="ts">
  import * as Carousel from '$lib/components/ui/carousel';
  import { ChevronRight } from 'lucide-svelte';

  const NEWS = [
    {
      title: '11/3: Qualify for the Copenhagen Open!',
      description:
        'Registration is open for the Copenhagen Open 2024 Qualification Tournament.\nRegister now to get a chance to win a spot in the tournament.',
      link: 'https://discgolfmetrix.com/2852767'
    },
    {
      title: 'Title 2',
      description: 'Article without a link.'
    }
  ];
</script>

<div class="space-y-4">
  <div class="items-center 2xl:w-3/4 mx-auto">
    <Carousel.Root
      class="w-full"
      opts={{ loop: true }}
    >
      <Carousel.Content>
        {#each NEWS as entry}
          <Carousel.Item class="text-black select-none">
            <svelte:element
              this={entry.link ? 'a' : 'div'}
              href={entry.link}
              class="flex w-full pb-12 items-center justify-between rounded-md bg-primary p-4 {entry.link &&
                'cursor-pointer hover:bg-primary/90'}"
            >
              <div>
                <h2 class="text-xl font-bold unstyled md:text-3xl">{entry.title}</h2>
                <p class="text-sm mb-8">{entry.description}</p>
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
  </div>
  <div class="2xl:w-1/2 mx-auto">
    <h2>Welcome to the Copenhagen Open</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto incidunt tempora soluta
      eligendi exercitationem nam reprehenderit quas iste praesentium fuga at, veritatis consectetur
      ad laborum quia, id, autem a deleniti!
    </p>
  </div>
</div>
