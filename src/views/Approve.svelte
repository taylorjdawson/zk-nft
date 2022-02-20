<script context="module">
  export const title = 'Approve'
</script>

<script>
  import { onMount } from 'svelte'

  import { SEMAPHORE_STAKING_CONTRACT_ADDRESS, VIEWS } from '../constants'

  import { account$, currentView$, stakingContract$ } from '../state'

  onMount(async () => {
    const isApproved = await $stakingContract$.isApprovedForAll(
      $account$?.address,
      SEMAPHORE_STAKING_CONTRACT_ADDRESS
    )

    if (isApproved) {
      $currentView$ = VIEWS.TOKENS
    }
  })

  const approve = async () => {
    const res = await $stakingContract$.setApprovalForAll(SEMAPHORE_STAKING_CONTRACT_ADDRESS, true)
    if (res) {
      $currentView$ = VIEWS.TOKENS
    }
  }
</script>

<div class="flex flex-col items-center">
  <h2 class="font-medium text-lg mb-6">Approve Transfers</h2>
  <div>Allow contract to to make transfers on your behalf</div>
  <button class="px-4 py-2 w-1/2 bg-accent rounded-md text-white" on:click={approve}>Approve</button
  >
</div>
