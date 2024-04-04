<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
</script>

<div
  id="hero"
  style="background-image: url(images/co2024-website_background.jpg)"
  class="-mb-16 -mt-16 h-screen w-screen bg-[''] bg-cover bg-center bg-no-repeat"
>
  <div class="flex h-[calc(100vh-4rem)] w-screen min-w-full flex-col bg-black/50 py-16">
    <div class="pt-8 xl:pt-16">
      <div class="flex items-center justify-between page-container lg:px-16">
        <img src="/images/co2024-logo.png" class="size-[32vh] xl:size-[40vh]" />
        <div class="hidden lg:block">
          <h1
            class="unstyled text-right text-[5vw] font-extrabold uppercase leading-[5vw] tracking-tight 2xl:text-9xl"
          >
            <span class="block text-primary">Copenhagen</span>
            <span class="block text-secondary">Open</span>
          </h1>
          <p class="unstyled text-[5vw] 2xl:text-9xl font-extrabold uppercase leading-[5vw] tracking-tight">
            <span class="block text-secondary">2024</span>
            <span class="block text-primary">DGPT Europe</span>
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full gap-8 pt-10 max-lg:page-container grow lg:flex-row lg:px-16 lg:pt-16"
    >
      <Button
        href="/publikum"
        variant="default"
        size="huge"
        class="group relative w-full !border border-accent bg-secondary/50 py-8 text-gray-400 backdrop-blur-sm hover:!border-8 hover:border-primary hover:bg-secondary/50 hover:text-white lg:pl-8 2xl:pl-16"
      >
        <div class="absolute items-center hidden h-full mt-1 right-6 group-hover:hidden 2xl:flex">
          <ChevronRight class="size-16" />
        </div>

        <div
          class="flex flex-[1] transition-all duration-[400ms] lg:flex-[0] lg:group-hover:flex-[1]"
        />

        <div class="flex items-center gap-4 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-12 sm:size-16 2xl:size-[4vw]"
          >
            <path
              d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
            />
          </svg>

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
        class="group relative w-full !border border-accent bg-secondary/75 py-8 text-gray-400 backdrop-blur-md hover:border-8 hover:border-primary hover:bg-primary hover:text-white lg:pl-8 2xl:pl-16"
      >
        <div class="absolute items-center hidden h-full mt-1 right-6 group-hover:hidden 2xl:flex">
          <ChevronRight class="size-16" />
        </div>

        <div
          class="flex flex-[1] transition-all duration-[400ms] lg:flex-[0] lg:group-hover:flex-[1]"
        />

        <div class="flex items-center gap-4 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-12 sm:size-16 2xl:size-[4vw]"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="text-[8vw] uppercase sm:text-[2.5rem] xl:text-[4vw] 2xl:-translate-y-1"
            >For Players</span
          >
        </div>
        <div class="flex-[1] transition-[flex] duration-1000" />
      </Button>
    </div>
  </div>
</div>
