<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { User, Users } from 'lucide-svelte';
</script>

<div
  id="hero"
  style="background-image: url(images/co2024-website_background.jpg)"
  class="-mb-16 -mt-16 h-screen w-screen bg-[''] bg-cover bg-center bg-no-repeat"
>
  <div class="flex h-[calc(100vh-4rem)] w-screen flex-col bg-black/50 px-16 py-16">
    <div class="flex justify-center pt-16">
      <img src="/images/co2024-logo.png" class="h-[40vh]" />
    </div>
    <div class="flex gap-8 pt-16 grow">
      <Button variant="gray" size="huge" class="pl-8 group">
        <div class="flex-[0] transition-[flex] duration-1000 group-hover:flex-[1]" />
        <div class="flex items-center w-[fit-content]">
          <Users class="h-[6vw] w-[6vw]" />
          <span class="text-[5vw]"> Til publikum </span>
        </div>
        <div class="flex-[1] transition-[flex] duration-1000" />
      </Button>
      <Button variant="gray2" size="huge" class="pl-8 group">
        <div class="flex-[0] transition-[flex] duration-1000 group-hover:flex-[1]" />
        <div class="flex items-center w-[fit-content]">
          <User class="h-[6vw] w-[6vw]" />
          <span class="text-[5vw]"> For players </span>
        </div>
        <div class="flex-[1] transition-[flex] duration-1000" />
      </Button>
    </div>
  </div>
</div>
