<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { User, Users } from 'lucide-svelte';
</script>

<div
  id="hero"
  style="background-image: url(images/co2024-website_background.jpg)"
  class="-mb-16 -mt-16 h-screen w-screen bg-[''] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[calc(50%+26px)]"
  >
    <img src="/images/co2024-logo.png" class="w-96 sm:w-64 lg:w-32 xl:w-72 2xl:w-96" />
  </div>
  <div class="relative flex flex-col h-full px-4 py-20 text-center md:px-48 md:py-24">
    <div class="flex flex-col flex-auto gap-8 lg:flex-row">
      <Button href="/publikum" variant="huge" size="huge">
        <Users strokeWidth="3" class="w-12 h-12 text-white lg:h-24 lg:w-24" />
        <h2 class="text-3xl text-white unstyled font-medium lg:text-5xl">Info til publikum</h2>
      </Button>
      <Button href="/player" variant="huge" size="huge">
        <User strokeWidth="3" class="w-12 h-12 text-primary lg:h-24 lg:w-24" />
        <h2 class="text-3xl text-primary unstyled font-medium lg:text-5xl">For players</h2>
      </Button>
    </div>
  </div>
</div>
