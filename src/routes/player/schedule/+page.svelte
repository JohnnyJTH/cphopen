<script>
  import { Badge } from '$lib/components/ui/badge';
  import { Clock } from 'lucide-svelte';
  import { Schedule } from './_components';
</script>

<div class="text-center">
  <h1>Tournament Schedule</h1>
  <Badge class="gap-2 mt-2">
    <Clock size="12" /> Central European Summer Time (GMT+2)
  </Badge>
</div>
<Schedule />
