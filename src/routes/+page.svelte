<script lang="ts">
  import { ChevronRight, User, Users } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
</script>

<div
  id="hero"
  style="background-image: url(images/co2024-website_background.jpg)"
  class="-my-16 h-screen w-screen bg-[''] bg-cover bg-center bg-no-repeat"
>
  <div class="flex h-[calc(100dvh-4rem)] w-screen min-w-full flex-col bg-black/50 pt-16">
    <div class="hidden lg:block lg:pt-16">
      <div class="mx-auto flex max-w-[120rem] items-center justify-between lg:px-16">
        <img src="/images/co2024-logo.png" class="size-[32vh] xl:size-[40vh]" />
        <div
          class="hidden text-[7vw] font-extrabold uppercase leading-[6vw] tracking-tight lg:block xl:text-[6vw] xl:leading-[5vw] 3xl:text-9xl"
        >
          <h1 class="text-right unstyled">
            <span class="block text-primary">Copenhagen</span>
            <span class="block text-secondary">Open</span>
          </h1>
          <p class="unstyled">
            <span class="block text-secondary">2024</span>
            <span class="block text-primary">DGPT Europe</span>
          </p>
        </div>
      </div>
    </div>

<div class="absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:hidden">
      <img src="/images/co2024-logo.png" class="w-[30dvh]" />
    </div>

    <div
      class="flex flex-col w-full gap-8 py-10 max-2xl:page-container grow lg:flex-row lg:py-16 2xl:px-16"
    >
      <Button
        href="/publikum"
        variant="default"
        size="huge"
        class="relative w-full py-8 text-gray-400 border group border-accent bg-secondary/60 backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-white lg:pl-8 2xl:pl-16"
      >
        <div class="absolute items-center hidden h-full mt-1 right-6 group-hover:hidden 2xl:flex">
          <ChevronRight class="size-16" />
        </div>

        <div
          class="flex flex-[1] transition-all duration-[400ms] lg:flex-[0] lg:group-hover:flex-[1]"
        />

        <div class="flex items-center gap-4 w-fit">
          <Users strokeWidth="3" class="size-12 sm:size-16 2xl:size-[4vw]" />
          <span class="text-[8vw] uppercase sm:text-[2.5rem] xl:text-[4vw] 2xl:-translate-y-1"
            >Til publikum</span
          >
        </div>
        <div class="flex-[1] transition-[flex] duration-1000" />
      </Button>

      <Button
        href="/player"
        variant="default"
        size="huge"
        class="relative w-full py-8 text-gray-400 border group border-accent bg-secondary/60 backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-white lg:pl-8 2xl:pl-16"
      >
        <div class="absolute items-center hidden h-full mt-1 right-6 group-hover:hidden 2xl:flex">
          <ChevronRight class="size-16" />
        </div>

        <div
          class="flex flex-[1] transition-all duration-[400ms] lg:flex-[0] lg:group-hover:flex-[1]"
        />

        <div class="flex items-center gap-4 w-fit">
          <User strokeWidth="3" class="size-12 sm:size-16 2xl:size-[4vw]" />
          <span class="text-[8vw] uppercase sm:text-[2.5rem] xl:text-[4vw] 2xl:-translate-y-1"
            >For Players</span
          >
        </div>
        <div class="flex-[1] transition-[flex] duration-1000" />
      </Button>
    </div>
  </div>
</div>
