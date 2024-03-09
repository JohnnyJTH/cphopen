<script lang="ts">
  import { page } from '$app/stores';
  import { CalendarDays, Menu } from 'lucide-svelte';
  import { Tabs } from './ui/navigation';
  import { Drawer } from 'vaul-svelte';
  import { cn } from '$lib/utils';

  let drawerClose: HTMLButtonElement;
  $: isHomePage = $page.url.pathname === '/';

  const PLAYER_LINKS = [
    { href: '/player', label: 'Home' },
    { href: '/player/schedule', label: 'Schedule' },
    { href: '/player/course', label: 'Course' },
    {
      label: 'Practical info',
      id: 1,
      items: [
        {
          href: '/player/accomodation',
          label: 'Accomodation',
          description: 'Overview of accomodation options around the course.'
        },
        {
          href: '/player/food',
          label: 'Food',
          description: 'Information about available food during the tournament.'
        }
      ]
    },
    {
      label: 'About the tournament',
      id: 2,
      items: [
        {
          href: '/player/map',
          label: 'Area map',
          description: 'A map of all the tournament areas.'
        },
        {
          href: '/player/scoring',
          label: 'Scoring',
          description: 'Important information about scoring.'
        },
        { href: '/player/ties', label: 'Ties', description: 'How ties are handled.' },
        {
          href: '/player/spotters',
          label: 'Spotters',
          description: 'Details you need to know about spotters.'
        },
        {
          href: '/player/prize',
          label: 'Prize money',
          description: 'Details about the prize pool.'
        },
        {
          href: '/player/contact',
          label: 'Contact info',
          description: 'How to contact us via various platforms.'
        }
      ]
    }
  ];
  const PUBLIKUM_LINKS = [
    { href: '/publikum', label: 'Hjem' },
    { href: '/publikum/etik', label: 'Etik' },
    { href: '/publikum/aktiviteter', label: 'Aktiviteter & Konkurrencer' },
    {
      label: 'Information',
      id: 1,
      items: [
        {
          href: '/publikum/kort',
          label: 'Områdekort',
          description: 'Oversigt over turneringsområdet.'
        },
        {
          href: '/publikum/program',
          label: 'Program',
          description: 'Oversigt over programmet for turneringen.'
        },
        {
          href: '/publikum/banen',
          label: 'Banen',
          description: 'Information om banen og hullerne.'
        },
        {
          href: '/publikum/resultater',
          label: 'Resultater',
          description: 'PDGA resultater fra turneringen.'
        },
        {
          href: '/publikum/kontakt',
          label: 'Kontakt',
          description: 'Hvordan du kan kontakte os.'
        }
      ]
    }
  ];
  $: NAV_ITEMS = $page.url.pathname.includes('/player')
    ? PLAYER_LINKS.filter((link) => !link.items)
    : PUBLIKUM_LINKS.filter((link) => !link.items);
  $: SUBNAVS = $page.url.pathname.includes('/player')
    ? PLAYER_LINKS.filter((link) => link.items).map((link) => ({
        label: link.label,
        id: link.id ?? 0,
        items: link.items ?? []
      }))
    : PUBLIKUM_LINKS.filter((link) => link.items).map((link) => ({
        label: link.label,
        id: link.id ?? 0,
        items: link.items ?? []
      }));
</script>

<header
  id="header"
  class="sticky top-0 z-10 h-16 border-b border-accent bg-background/75 sm:px-6 {!isHomePage &&
    'bg-popover/75'} backdrop-blur-lg"
>
  <div class="flex items-center w-full h-full page-container">
    <div class="flex justify-start {isHomePage ? 'max-lg:flex-1' : 'flex-1'}">
      <a href="/">
        <img
          src="/images/edgpt-co.png"
          class="w-12 h-12"
          alt="DGPT Europe - Copenhagen Open 2024"
          style="position: fixed; height: 100px !important; width: 100px !important; top: -10px !important;"
        />
      </a>
    </div>
    {#if !isHomePage}
      <div class="gap-2 flexjustify-end">
        <div class="hidden lg:flex">
          {#each NAV_ITEMS as item}
            <a
              href={item.href}
              class={`flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${
                $page.url.pathname === item.href
                  ? 'text-primary underline underline-offset-4'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          {/each}
          <Tabs tabs={SUBNAVS} />
        </div>
        <div class="flex lg:hidden">
          <Drawer.Root>
            <Drawer.Trigger>
              <Menu />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay class="fixed inset-0 bg-black/40" />
              <Drawer.Content
                class="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[90%] flex-col rounded-t-[10px]"
              >
                <Drawer.Close bind:el={drawerClose} />
                <div class="flex-1 rounded-t-[10px] bg-background p-4">
                  <div class="mx-auto h-1.5 w-12 flex-shrink-0 rounded-full bg-accent sm:mb-8" />
                  <div class="flex flex-col gap-4 p-8 sm:gap-8">
                    {#each NAV_ITEMS as item}
                      <a
                        on:click={() => drawerClose.click()}
                        href={item.href}
                        class={cn(
                          'font-mono text-3xl font-bold uppercase sm:text-5xl',
                          $page.url.pathname === item.href &&
                            'text-primary underline underline-offset-8'
                        )}>{item.label}</a
                      >
                    {/each}
                    {#each SUBNAVS as subnav}
                      <div>
                        <span class="font-mono text-2xl capitalize sm:text-4xl">{subnav.label}</span
                        >
                        <div class="grid grid-cols-2 gap-3 p-1 sm:grid-cols-3">
                          {#each subnav.items as item}
                            <a
                              on:click={() => drawerClose.click()}
                              href={item.href}
                              class={cn(
                                'block select-none space-y-1 rounded-md bg-accent/60 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/40 hover:text-primary',
                                $page.url.pathname === item.href && 'bg-accent/60 text-primary'
                              )}
                            >
                              <div class="font-bold leading-none text-">{item.label}</div>
                              <p class="text-sm leading-snug line-clamp-2 text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          {/each}
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    {:else}
      <!-- Hovedmenuen er lidt anderledes på startsiden -->
      <div class="justify-center hidden lg:flex lg:flex-1">
        <h1 class="text-2xl font-bold unstyled text-primary">DGPT Europe - Copenhagen Open 2024</h1>
      </div>
      <div class="flex justify-end max-lg:flex max-lg:flex-col">
        <h1 class="text-xl font-bold unstyled text-primary sm:text-2xl lg:hidden">
          Copenhagen Open 2024
        </h1>
        <div class="flex gap-2 max-lg:justify-end">
          <CalendarDays />
          <span class="text-sm md:text-md sm:text-base">May 10-12, 2024</span>
        </div>
      </div>
    {/if}
  </div>
</header>
