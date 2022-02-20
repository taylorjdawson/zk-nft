<script>
  import { truncate } from '../utils'

  export let address
</script>

<div class="flex items-center">
  <div class={`rounded-full h-3 w-3 mr-2 bg-red-500 ${address ? 'bg-green' : ''}`} />
  {#if address}
    {truncate(address)}
  {:else}
    Not Connected
  {/if}
</div>
