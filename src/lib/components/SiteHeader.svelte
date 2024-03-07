<script>
  import { page } from '$app/stores';
  import { CalendarDays } from 'lucide-svelte';
  import { Button } from './ui/button';
  import { DefaultContent, Tabs } from './ui/navigation';

  const PLAYER_LINKS = [
    {
      label: 'Home',
      href: '/player'
    },
    {
      label: 'Accomodation',
      href: '/player/accomodation'
    },
    {
      label: 'Schedule',
      href: '/player/schedule'
    },
    {
      label: 'Area map',
      href: '/player/map'
    },
    {
      label: 'Course',
      href: '/player/course'
    },
    {
      label: 'Scoring',
      href: '/player/scoring'
    },
    {
      label: 'Spotters',
      href: '/player/spotters'
    },
    {
      label: 'Food',
      href: '/player/food'
    },
    {
      label: 'Prize Money',
      href: '/player/prize'
    },
    {
      label: 'Ties',
      href: '/player/ties'
    },
    {
      label: 'Contact info',
      href: '/player/contact'
    }
  ];
</script>

<header
  id="header"
  class="sticky top-0 z-10 h-16 border-b border-accent bg-background/75 sm:px-6 {$page.url
    .pathname !== '/' && 'bg-popover/75'} backdrop-blur-lg"
>
  <div class="container flex items-center w-full h-full">
    <div class="flex justify-start {$page.url.pathname === '/' ? 'max-md:flex-1' : 'flex-1'}">
      <a href="/">
        <img
          src="/images/edgpt-co.png"
          class="w-12 h-12"
          alt="European Pro Tour: Copenhagen Open"
        />
      </a>
    </div>
    {#if $page.url.pathname !== '/'}
      <div class="flex justify-end w-full p-8 h-96 bg-neutral-950 text-neutral-200">
        <Tabs
          tabs={[
            {
              label: 'Test',
              id: 0,
              items: [{ href: '/player', label: 'Home', description: 'Idk man' }]
            }
          ]}
        />
        <!-- {#each PLAYER_LINKS as link}
          <Button href={link.href} variant="link">{link.label}</Button>
        {/each} -->
      </div>
    {:else}
      <!-- Hovedmenuen er lidt anderledes på startsiden -->
      <div class="justify-center hidden md:flex md:flex-1">
        <h1 class="text-2xl font-bold text-primary">European Pro Tour: Copenhagen Open</h1>
      </div>
      <div class="flex justify-end max-md:flex max-md:flex-col">
        <h1 class="text-xl font-bold text-primary sm:text-2xl md:hidden">DGPT: Copenhagen Open</h1>
        <div class="flex gap-2 max-md:justify-end">
          <CalendarDays />
          <span class="text-sm md:text-md sm:text-base">May 10-12</span>
        </div>
      </div>
    {/if}
  </div>
</header>
