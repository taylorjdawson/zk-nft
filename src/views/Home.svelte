<script>
  import { VIEWS } from '../constants'

  import { currentView$, viewToName } from '../state'
</script>

<div class="flex flex-1 flex-col items-center w-1/2 m-auto text-center">
  {#each [VIEWS.STAKE, VIEWS.MINT, VIEWS.VERIFY] as view}
    <div
      on:click={() => {
          console.log('clicckkk');
        $currentView$ = view
      }}
      class="w-full rounded bg-slate-400 font-medium text-base p-4 transition ease-in-out opacity-70 hover:opacity-100 cursor-pointer mb-4"
    >
      {viewToName[view]}
    </div>
  {/each}
</div>
