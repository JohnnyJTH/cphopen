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
    <div class="absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
      <img src="/images/co2024-logo.png" class="w-[30dvh] lg:w-[20dvw]" />
    </div>

    <div
      class="flex flex-col w-full gap-8 py-10 max-2xl:page-container grow lg:flex-row lg:py-8 xl:py-16 2xl:px-16"
    >
      <Button
        href="/publikum"
        variant="default"
        size="huge"
        class="relative w-full py-8 text-gray-400 border group border-accent bg-secondary/60 backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-white lg:justify-start lg:pl-8 2xl:pl-16"
      >
        <div class="flex items-center gap-4 2xl:flex-col 2xl:gap-8 2xl:pl-[3vw]">
          <Users strokeWidth="3" class="size-12 sm:size-16 2xl:size-[6vw]" />
          <span class="text-[8vw] uppercase sm:text-[2.5rem] xl:text-[4vw] 2xl:-translate-y-1"
            >Til publikum</span
          >
        </div>
      </Button>

      <Button
        href="/player"
        variant="default"
        size="huge"
        class="relative w-full py-8 text-gray-400 border group border-accent bg-secondary/60 backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-white lg:justify-end lg:pr-8 2xl:pr-16"
      >
        <div class="flex items-center gap-4 2xl:flex-col 2xl:gap-8 2xl:pr-[3vw]">
          <User strokeWidth="3" class="size-12 sm:size-16 2xl:size-[6vw]" />
          <span class="text-[8vw] uppercase sm:text-[2.5rem] xl:text-[4vw] 2xl:-translate-y-1"
            >For players</span
          >
        </div>
      </Button>
    </div>
  </div>
</div>
