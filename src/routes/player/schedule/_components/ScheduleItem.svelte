<script lang="ts">
  export let time: string;
  export let title: string;
  export let description = '';
  export let important = false;
  export let last = false;
</script>

<div class="flex flex-row items-stretch gap-4">
  <p class="w-24 text-sm text-right uppercase unstyled shrink-0 text-muted-foreground">{time}</p>
  <div class="block w-[1px] shrink-0 bg-muted-foreground"></div>
  <div class="flex-1 space-y-3 {!last && 'pb-12'}">
    <h4 class="text-xl font-bold {important && 'text-primary'}">{title}</h4>
    <p class={important ? 'text-white' : 'text-muted-foreground'}>
      {@html description}
    </p>
  </div>
</div>
