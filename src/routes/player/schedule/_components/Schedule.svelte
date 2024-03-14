<script>
  import { ScheduleItem } from '.';
</script>

<div class="grid max-lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
  <div class="space-y-4">
    <h3 class="text-center">Monday</h3>
    <div>
      <ScheduleItem time="all day" title="Qualification Tournament" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Tuesday &mdash; Thursday</h3>
    <div>
      <ScheduleItem time="all day" title="Practice Rounds" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Friday</h3>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Saturday</h3>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" important />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Sunday</h3>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
</div>
