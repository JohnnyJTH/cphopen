<script>
  import { ScheduleItem } from '.';
</script>

<div class="grid max-lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
  <div class="space-y-4">
    <h3 class="text-center">Monday</h3>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
      <ScheduleItem time="16:30" title="Qualification Tournament" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Tuesday</h3>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Wednesday</h3>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Thursday</h3>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Friday</h3>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" important />
      <ScheduleItem time="16:00" title="Last Tee-Off" last />
    </div>
  </div>
  <div class="space-y-4">
    <h3 class="text-center">Saturday</h3>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" />
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
