<script lang="ts">
  import { dev } from '$app/environment';
  import { SiteFooter, SiteHeader, TailwindIndicator } from '$lib/components';
  import '../app.pcss';

  let title = 'Copenhagen Open 2024';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if dev}
  <TailwindIndicator />
{/if}

<SiteHeader />
<slot />
<SiteFooter />
