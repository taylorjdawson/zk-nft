<script>
  import { currentView$ } from '../state'

  import { VIEWS } from '../constants'

  const verify = async () => {
    const res = await fetch('/verify')
    console.log(res)
  }

  const back = () => {
    $currentView$ = VIEWS.HOME
  }
</script>

<div class="text-center flex-row">
  <h2 class="font-medium text-lg mb-6">Verify</h2>
  <p>Verify your DAO membership</p>
  <div class="flex mt-10">
    <button
      class=" mr-4 px-4 py-2 w-1/2 bg-white border border-neutral-600 rounded-md text-black"
      on:click={back}>Back</button
    >
    <button class="px-4 py-2 w-1/2 bg-accent rounded-md text-white" on:click={verify}>Verify</button
    >
  </div>
</div>
