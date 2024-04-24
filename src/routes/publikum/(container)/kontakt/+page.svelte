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
          <Mail class="size-6" />
          <a href="mailto:sf@cphopen.dk" class="ml-3">sf@cphopen.dk</a>
        </div>
      </div>
      <div class="space-y-2">
        <h3 class="text-xl font-bold unstyled">Mobil</h3>
        <div class="flex items-center">
          <Phone class="size-6" />
          <a href="tel:+4526156819" class="ml-3">+45 26 15 68 19</a>
        </div>
      </div>
    </div>
  </div>
  <div class="border-t border-gray-200" />
  <div class="space-y-4">
    <div class="space-y-2">
      <h2 class="text-2xl font-bold unstyled">Sponsorforespørgsler</h2>
      <p class="text-muted-foreground">
        For sponsorforespørgsler, kontakt venligst vores sponsorteam.
      </p>
    </div>
    <div class="space-y-2">
      <h3 class="text-xl font-bold unstyled">Email</h3>
      <div class="flex items-center">
        <Mail class="size-6" />
        <a href="mailto:sponsor@cphopen.dk" class="ml-3"
          >sponsor@cphopen.dk</a
        >
      </div>
    </div>
  </div>
  <div class="border-t border-gray-200" />
  <div class="space-y-4">
    <div class="space-y-2">
      <h2 class="text-2xl font-bold unstyled">Pressekontakt</h2>
      <p class="text-muted-foreground">
        For pressehenvendelser, kontakt venligst vores pressechef Alexander Elverlund.
      </p>
    </div>
    <div class="space-y-2">
      <h3 class="text-xl font-bold unstyled">Email</h3>
      <div class="flex items-center">
        <Mail class="size-6" />
        <a href="mailto:presse@cphopen.dk" class="ml-3"
          >presse@cphopen.dk</a
        >
      </div>
    </div>
  </div>
</div>
