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
      <ScheduleItem time="08:00" title="Course open for practice" description="PRACTICE IS ONLY FOR PLAYERS WITH A SPOT IN THE MAIN TOURNAMENT OR THE QUALIFICATION TOURNAMENT!" />
      <ScheduleItem time="16:30" title="Qualification Tournament" description="The qualification tournament is for registered players for this specific event. No other players are allowed to use the course from 16:30 on Monday!" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Tuesday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 7th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" description="PRACTICE IS ONLY FOR PLAYERS WITH A SPOT IN THE MAIN TOURNAMENT!" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Wednesday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 8th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" description="PRACTICE IS ONLY FOR PLAYERS WITH A SPOT IN THE MAIN TOURNAMENT!" />
      <ScheduleItem time="09:00-18:00" title="Course assets are set up" description="Course assets include circle 1 and 2 whiskers, tents and beach flags." last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Thursday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 9th</p>
    </div>
    <div>
      <ScheduleItem time="08:00" title="Course open for practice" description="PRACTICE IS ONLY FOR PLAYERS WITH A SPOT IN THE MAIN TOURNAMENT!" />
      <ScheduleItem time="09:00-17:00" title="Practice area is set up" description="Includes fencing off some areas." />
      <ScheduleItem time="15:00-17:00" title="Press Conference" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0">Friday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 10th</p>
    </div>
    <div>
      <ScheduleItem time="08:30" title="First Tee-Off" />
      <ScheduleItem time="10:00" title="FPO feature card tee-off" />
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
