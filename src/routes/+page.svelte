<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Table from '$lib/components/ui/table';
  import { ALL_RESULTS } from '$lib/results';

  let division = 'MPO';
  $: results = division === 'MPO' ? ALL_RESULTS.mpo : ALL_RESULTS.fpo;

  let resultsEl: HTMLElement;
</script>

<div class="space-y-16 page-container">
  <div class="relative space-y-16 isolate pt-14">
    <div
      class="absolute inset-x-0 overflow-hidden -top-16 -z-10 transform-gpu blur-3xl"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-background sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <div class="!mt-0 flex flex-col items-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-center unstyled lg:text-6xl">
        Copenhagen Open 2024
      </h1>
      <p class="!mt-2 text-center text-lg leading-8">
        The biggest Disc Golf tournament to date in Denmark!
      </p>
      <div class="flex gap-2 mt-2">
        <Button on:click={() => resultsEl.scrollIntoView({ behavior: 'smooth' })}
          >See results</Button
        >
        <Button href="/publikum" variant="outline">Tilskuer info</Button>
        <Button href="/player" variant="outline">Player info</Button>
      </div>
      <img
        src="images/winners.png"
        alt="Winners of the Copenhagen Open 2024"
        class="mt-16 rounded"
      />
    </div>
    <div
      class="absolute inset-x-0 overflow-hidden -z-10 transform-gpu blur-3xl sm:top-1/2"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-background sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
  </div>

  <section bind:this={resultsEl}>
    <div class="flex justify-between">
      <div class="flex gap-4">
        <h2 class="border-none">Results</h2>
        <div class="flex gap-2">
          <Button
            on:click={() => (division = 'MPO')}
            variant={division === 'MPO' ? 'outline' : 'ghost'}
            class="z-10">MPO</Button
          >
          <Button
            on:click={() => (division = 'FPO')}
            variant={division === 'FPO' ? 'outline' : 'ghost'}
            class="z-10">FPO</Button
          >
        </div>
      </div>
      <Button
        href="https://www.dgpt.com/event-scores/?id=78193&division=MPO&season=2024&round=3&round_id=122292629"
        target="_blank"
        class="z-10"
      >
        Full standings
      </Button>
    </div>
    <div>
      <h3 class="mb-3">Winner</h3>
      <hr class="border border-white" />
      <div class="flex items-center w-full py-4">
        <div class="flex flex-[2_1_0%] items-center gap-6">
          <div
            class="flex items-center justify-center rounded-full size-16 shrink-0 grow-0 md:size-24"
          >
            <img
              src={results[0].image}
              alt={results[0].name}
              class="object-cover rounded-full size-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="text-2xl font-semibold unstyled md:text-3xl">{results[0].name}</h3>
            <div class="flex items-center gap-1">
              <img
                src={`https://flagcdn.com/${results[0].origin.country.toLowerCase()}.svg`}
                alt={results[0].origin.full}
                class="h-4"
              />
              <span class="text-lg font-semibold uppercase text-muted-foreground"
                >{results[0].origin.full}</span
              >
            </div>
          </div>
        </div>
        <div class="flex-col flex-1 hidden md:flex">
          <span class="text-3xl font-semibold">€{results[0].earnings}</span>
          <span class="text-lg font-semibold uppercase text-muted-foreground"> Earnings </span>
        </div>
        <div class="flex-col flex-1 hidden md:flex">
          <span class="text-3xl font-semibold">{results[0].score.r3}</span>
          <span class="text-lg font-semibold uppercase text-muted-foreground"> Round </span>
        </div>
        <span class="text-6xl font-semibold">{results[0].score.total}</span>
      </div>
      <hr class="border-zinc-400" />
      <h3 class="text-xl">Runner-ups</h3>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head>Pos</Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head class="w-10">Total</Table.Head>
            <Table.Head class="hidden w-[2.5rem] sm:table-cell">R1</Table.Head>
            <Table.Head class="hidden w-[2.5rem] sm:table-cell">R2</Table.Head>
            <Table.Head class="hidden w-[2.5rem] sm:table-cell">R3</Table.Head>
            <Table.Head class="text-right">Earnings</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each results as result}
            <Table.Row>
              <Table.Cell>{result.place}</Table.Cell>
              <Table.Cell class="flex items-center gap-1">
                <img
                  src={`https://flagcdn.com/${result.origin.country.toLowerCase()}.svg`}
                  alt={result.origin.full}
                  class="h-3"
                />
                {result.name}
              </Table.Cell>
              <Table.Cell>{result.score.total}</Table.Cell>
              <Table.Cell class="hidden sm:table-cell">{result.score.r1}</Table.Cell>
              <Table.Cell class="hidden sm:table-cell">{result.score.r2}</Table.Cell>
              <Table.Cell class="hidden sm:table-cell">{result.score.r3}</Table.Cell>
              <Table.Cell class="text-right">€{result.earnings}</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
  </section>
</div>
