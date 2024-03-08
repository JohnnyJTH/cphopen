<script lang="ts">
  import { page } from '$app/stores';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
</script>

<div
  class="flex flex-col items-center justify-center h-full -mt-16 -mb-16 space-y-4 page-container"
>
  <Badge>{$page.status}</Badge>
  <h1>{$page.error?.message ?? 'An unknown error occured.'}</h1>
  {#if $page.status === 404}
    <p class="!m-0">The page you are looking for does not exist.</p>
  {/if}
  <Button href="/">Go back to safety</Button>
</div>
