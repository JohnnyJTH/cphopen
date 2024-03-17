<script>
  import { Badge } from '$lib/components/ui/badge';
  import { Clock } from 'lucide-svelte';
  import { Schedule } from '../../player/schedule/_components';
</script>

<div class="text-center">
  <h1>Program</h1>
  <Badge class="gap-2 mt-3">
    <Clock size="12" />Centraleuropæisk sommertid (GMT+2)
  </Badge>
  <p class="!mt-1 text-muted-foreground">
    Programmet er kun tilgængeligt på engelsk, da det hovedsageligt er til spillere og frivillige.
  </p>
</div>
<Schedule />
