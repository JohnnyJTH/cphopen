<script lang="ts">
  import Autoplay from 'embla-carousel-autoplay';
  import { Button, buttonVariants } from '$lib/components/ui/button';
  import * as Carousel from '$lib/components/ui/carousel';
  import * as Dialog from '$lib/components/ui/dialog';
  import { ChevronRight, HelpCircle } from 'lucide-svelte';
  import { cn } from '$lib/utils';

  const CAROUSEL_ITEMS: { title: string; description: string; image: string; link?: string }[] = [
    {
      title: 'Copenhagen Open',
      description:
        'Copenhagen Open er første stop på den helt nye, meget prestigefyldte tour: Disc Golf Pro Tour Europe 2024.',
      image: '/images/ept2023_women-top2.jpg'
    },
    {
      title: 'Valbyparken',
      description:
        'Turneringen løber af stablen på VERDENS mest spillede bane - nemlig vores egen Valbyparken Disc Golf Park. Det er vi meget stolte af.',
      image: '/images/ept2023_spectators1.jpg'
    }
  ];
</script>

<div class="max-w-3xl mx-auto space-y-4">
  <div class="flex flex-col items-center">
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
              class="absolute top-4 hidden items-center justify-between rounded-r-md bg-background/60 p-4 sm:flex sm:w-3/4 {entry.link &&
                'cursor-pointer hover:bg-background/80'}"
            >
              <div>
                <h2 class="unstyled text-[2vh] font-bold sm:text-xl md:text-3xl">{entry.title}</h2>
                <p class="!m-0 text-[13.5px] sm:text-sm">{entry.description}</p>
              </div>
              <div>
                {#if entry.link}
                  <ChevronRight />
                {/if}
              </div>
            </svelte:element>
            <Dialog.Root>
              <Dialog.Trigger
                class={cn(
                  buttonVariants({ variant: 'secondary', size: 'icon' }),
                  'absolute bottom-3 ml-3 flex h-8 w-8 touch-manipulation rounded-full sm:hidden'
                )}
              >
                <HelpCircle class="w-4 h-4" />
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>{entry.title}</Dialog.Title>
                  <Dialog.Description>{entry.description}</Dialog.Description>
                </Dialog.Header>
              </Dialog.Content>
            </Dialog.Root>
            <img src={entry.image} alt={entry.title} />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous class="hidden md:inline-flex" />
      <Carousel.Next class="hidden md:inline-flex" />
      <Carousel.Dots />
    </Carousel.Root>
  </div>
  <div class="flex flex-col">
    <h2>Europas største disc golf-turnering kommer igen forbi København</h2>
    <p>
      Fra fredag den 10. maj til søndag den 12. maj 2024 spiller verdens bedste disc golf-spillere
      Copenhagen Open i Valbyparken. Den traditionsrige turnering er første stop på den nyetablerede
      Disc Golf Pro Tour - Europe.
    </p>
    <p>
      Vi opfordrer alle tilskuere til at registrere sig og få en gratis billet til de(n) dag(e),
      hvor man ønsker at komme. Ved at få en billet har vi mulighed for at kontakte jer ved vigtige
      hændelser, som f. eks. afbrydelser pga. farligt vejr. Man får ligeledes adgang til en app,
      hvor der er mere information omkring turneringen.
    </p>
    <div class="mt-6 mb-6">
      <Button href="https://sviby.com/en/e/vcv72y" target="_blank">Få billetter her</Button>
    </div>
  </div>
</div>
