<script>
  import { page } from '$app/stores';
  import { CalendarDays } from 'lucide-svelte';
  import { Tabs } from './ui/navigation';

  const PLAYER_LINKS = [
    { href: '/player', label: 'Home' },
    { href: '/player/schedule', label: 'Schedule' },
    { href: '/player/course', label: 'Course' },
    {
      label: 'Practical info',
      id: 1,
      items: [
        { href: '/player/accomodation', label: 'Accomodation', description: 'TBA' },
        { href: '/player/food', label: 'Food', description: 'TBA' }
      ]
    },
    {
      label: 'About the tournament',
      id: 2,
      items: [
        { href: '/player/map', label: 'Area map', description: 'TBA' },
        { href: '/player/scoring', label: 'Scoring', description: 'TBA' },
        { href: '/player/ties', label: 'Ties', description: 'TBA' },
        { href: '/player/spotters', label: 'Spotters', description: 'TBA' },
        { href: '/player/prize', label: 'Prize money', description: 'TBA' },
        { href: '/player/contact', label: 'Contact info', description: 'TBA' }
      ]
    }
  ];

  const NAV_ITEMS = PLAYER_LINKS.filter((link) => !link.items);
  const SUBNAVS = PLAYER_LINKS.filter((link) => link.items);
</script>

<header
  id="header"
  class="sticky top-0 z-10 h-16 border-b border-accent bg-background/75 sm:px-6 {$page.url
    .pathname !== '/' && 'bg-popover/75'} backdrop-blur-lg"
>
  <div class="flex items-center w-full h-full page-container">
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
      <div class="flex justify-end gap-2">
        {#each NAV_ITEMS as item}
          <a
            href={item.href}
            class={`flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${
              $page.url.pathname === item.href
                ? 'text-primary underline underline-offset-4'
                : 'text-foreground'
            }`}
          >
            {item.label}
          </a>
        {/each}
        <Tabs tabs={SUBNAVS} />
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
