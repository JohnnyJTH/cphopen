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
          href: '/player/groups',
          label: 'Groups',
          description: 'Groups for the next round.'
        },
        {
          href: '/player/accomodation',
          label: 'Accomodation',
          description: 'Accomodation options near the course.'
        },
        {
          href: '/player/food',
          label: 'Food',
          description: 'Food options during the tournament.'
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
          description: 'Map of the whole tournament area.'
        },
        {
          href: '/player/spotters',
          label: 'Spotters',
          description: 'Spotters are your friends.'
        },
        {
          href: '/player/prize',
          label: 'Prize money',
          description: 'Prize money table.'
        },
        {
          href: '/player/scoring',
          label: 'Scoring',
          description: 'Important information about scoring.'
        },
        {
          href: '/player/ties',
          label: 'Ties',
          description: 'Resolving first place ties.'
        },
        {
          href: '/player/contact',
          label: 'Contact info',
          description: 'How to contact us.'
        }
      ]
    }
  ];
  const PUBLIKUM_LINKS = [
    { href: '/publikum', label: 'Hjem' },
    { href: '/publikum/tilskueradfærd', label: 'Tilskueradfærd' },
    { href: '/publikum/kort', label: 'Områdekort' },
    {
      label: 'Information',
      id: 1,
      items: [
        {
          href: '/publikum/banen',
          label: 'Banen',
          description: 'Information om banen og hullerne.'
        },
        {
          href: '/publikum/grupper',
          label: 'Teetider',
          description: 'Tidspunkter for de grupper, spillerne starter på'
        },
        {
          href: '/publikum/program',
          label: 'Program',
          description: 'Tidsplan for turneringsugen.'
        },
        {
          href: '/publikum/aktiviteter',
          label: 'Aktiviteter',
          description: 'Information om aktiviteter og konkurrencer.'
        },
        {
          href: '/publikum/resultater',
          label: 'Resultater',
          description: 'Resultater fra turneringen.'
        },
        {
          href: '/publikum/kontakt',
          label: 'Kontakt',
          description: 'Kontakt os.'
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
  class="sticky top-0 z-10 h-16 border-b border-accent bg-background/75 {!isHomePage &&
    'bg-popover/75'} backdrop-blur-lg"
>
  <div class="flex items-center w-full h-full page-container">
    <div class="flex justify-start {isHomePage ? 'max-lg:flex-1' : 'flex-1'}">
      <a href="/" class="flex items-center gap-2">
        <img src="/images/edgpt-icon.png" class="h-12" alt="DGPT Europe - Copenhagen Open 2024" />
        {#if !isHomePage}
          <span class="font-bold leading-10 atext-xl text-primary sm:text-2xl"
            >Copenhagen Open 2024</span
          >
        {/if}
      </a>
    </div>
    {#if !isHomePage}
      <div class="gap-2 flexjustify-end">
        <div class="hidden lg:flex">
          {#each NAV_ITEMS as item}
            <a
              href={item.href}
              class={`flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${
                decodeURI($page.url.pathname) === item.href
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
                          decodeURI($page.url.pathname) === item.href &&
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
