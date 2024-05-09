<script>
  import { ScheduleItem } from '.';
</script>

<div class="grid max-lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Monday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 6th</p>
    </div>
    <div>
      <ScheduleItem time="09:00-16:00" title="Course open for practice" description="PRACTICE ONLY FOR MAIN/QUALIFICATION TOURNAMENT PLAYERS!" />
      <ScheduleItem time="16:30" title="Qualification Tournament" description="The qualification tournament is for registered players for this specific event. No other players are allowed to use the course from 16:30 on Monday!" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Tuesday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 7th</p>
    </div>
    <div>
      <ScheduleItem time="09:00" title="Course open for practice" description="PRACTICE ONLY FOR MAIN TOURNAMENT PLAYERS! <a href='https://tinyurl.com/co24-pr-tu' target='_blank'>Register for a tee-time here</a>" />
      <ScheduleItem time="17:00-18:00" title="Clinic with Paul Ulibarri" description="Privately arranged clinic. <a class='block' href='https://tinyurl.com/co24-uli' target='_blank'>Register here</a>" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Wednesday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 8th</p>
    </div>
    <div>
      <ScheduleItem time="09:00" title="Course open for practice" description="PRACTICE ONLY FOR MAIN TOURNAMENT PLAYERS! <a href='https://tinyurl.com/co24-pr-we' target='_blank'>Register for a tee-time here</a>" />
      <ScheduleItem time="09:00-18:00" title="Course assets are set up" description="Course assets include circle 1 and 2 whiskers, tents and beach flags." last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Thursday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 9th</p>
    </div>
    <div>
      <ScheduleItem time="09:00" title="Course open for practice" description="PRACTICE ONLY FOR MAIN TOURNAMENT PLAYERS! <a href='https://tinyurl.com/co24-pr-th' target='_blank'>Register for a tee-time here</a>" />
      <ScheduleItem time="09:00-17:00" title="Practice area is set up" description="Includes fencing off some areas." last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Friday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 10th</p>
    </div>
    <div>
      <ScheduleItem time="08:15" title="First Tee-Off - FPO" />
      <ScheduleItem time="10:00" title="FPO feature card tee-off" />
      <ScheduleItem time="16:00" title="Last Tee-Off of the day - MPO feature card" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Saturday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 11th</p>
    </div>
    <div>
      <ScheduleItem time="08:15" title="First Tee-Off, second round - FPO" />
      <ScheduleItem time="10:00" title="FPO lead card tee-off, second round" />
      <ScheduleItem time="16:00" title="Last Tee-Off of the day - MPO lead card, second round" last />
    </div>
  </div>
  <div class="space-y-4">
    <div class="text-center">
      <h3 class="mb-0 text-primary">Sunday</h3>
      <p class="font-mono text-sm leading-none text-muted-foreground unstyled">May 12th</p>
    </div>
    <div>
      <ScheduleItem time="08:15" title="First Tee-Off, final round - FPO" />
      <ScheduleItem time="09:45" title="FPO chase card tee-off, final round = places 5-8" />
      <ScheduleItem time="10:00" title="FPO lead card tee-off, final round = top 4 FPO players" />
      <ScheduleItem time="15:45" title="MPO chase card tee-off, final round = places 5-8" />
      <ScheduleItem time="16:00" title="MPO lead card tee-off, final round = top 4 MPO players" last />
    </div>
  </div>
</div>
