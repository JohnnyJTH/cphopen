<script>
  import { ScheduleItem } from '.';
</script>

<div class="grid max-lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Monday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 6th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" />
      <ScheduleItem time="16:30" title="Qualification Tournament" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Tuesday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 7th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Wednesday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 8th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Thursday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 9th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Friday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 10th</p>
    </div>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" important />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Saturday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 11th</p>
    </div>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Sunday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 12th</p>
    </div>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
</div>
