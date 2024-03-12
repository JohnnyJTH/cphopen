<script lang="ts">
  import { Mail, Phone } from 'lucide-svelte';
</script>

<div class="grid gap-8 px-4 py-12">
  <div class="space-y-4">
    <h1>Kontakt os</h1>
    <div class="space-y-4">
      <div class="space-y-2">
        <h3 class="text-xl font-bold unstyled">Email</h3>
        <div class="flex items-center">
          <Mail class="w-5 h-5" />
          <a href="mailto:sf@cphopen.dk" class="ml-3 underline text-primary">sf@cphopen.dk</a>
        </div>
      </div>
      <div class="space-y-2">
        <h3 class="text-xl font-bold unstyled">Mobil</h3>
        <div class="flex items-center">
          <Phone class="w-5 h-5" />
          <a href="tel:+4526156819" class="ml-3 underline text-primary">+45 26 15 68 19</a>
        </div>
      </div>
    </div>
  </div>
  <div class="border-t border-gray-200" />
  <div class="space-y-4">
    <div class="space-y-2">
      <h2 class="text-2xl font-bold unstyled">Sponsoratforespørgelser</h2>
      <p class="text-muted-foreground">
        Til sponsoratforespørgelser, kontakt venligst vores sponsoransvarlige.
      </p>
    </div>
    <div class="space-y-2">
      <h3 class="text-xl font-bold unstyled">Email</h3>
      <div class="flex items-center">
        <Mail class="w-5 h-5" />
        <a href="mailto:sponsor@cphopen.dk" class="ml-3 underline text-primary"
          >sponsor@cphopen.dk</a
        >
      </div>
    </div>
  </div>
</div>
