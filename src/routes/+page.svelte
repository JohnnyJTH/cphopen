<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { User, Users } from 'lucide-svelte';
</script>

<div
  id="hero"
  style="background-image: url(images/EPT_CopenhagenOpen_6474.jpg)"
  class="-mb-16 -mt-16 h-screen w-screen bg-[''] bg-cover bg-center bg-no-repeat"
>
  <div class="relative flex flex-col h-full px-8 py-24 text-center md:px-16 md:py-32">
    <div class="flex flex-col flex-auto gap-8 lg:flex-row">
      <Button href="/publikum" variant="huge" size="huge">
        <Users strokeWidth="3" class="w-12 h-12 text-primary lg:h-24 lg:w-24" />
        <h2 class="text-3xl lg:text-5xl text-outline text-primary">For publikum</h2>
      </Button>
      <Button href="/player" variant="huge" size="huge">
        <User strokeWidth="3" class="w-12 h-12 text-primary lg:h-24 lg:w-24" />
        <h2 class="text-3xl lg:text-5xl text-outline text-primary">For players</h2>
      </Button>
    </div>
  </div>
</div>
