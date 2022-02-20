<script context="module">
  export const title = 'Connect'
</script>

<script>
  import { onboard } from '../services'
  import { wallets$ } from '../state'

  const connectWallet = async () => {
    $wallets$ = await onboard.connectWallet()
  }
</script>

<div class="flex flex-col items-center">
  <h2 class="my-5">Connect your Wallet to get started!</h2>

  <button class="px-4 py-2 w-1/2 bg-accent rounded-md text-white" on:click={connectWallet}
    >Connect</button
  >
</div>
