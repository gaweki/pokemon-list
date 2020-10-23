<script>
	import { link, Router } from "svelte-routing";
  import myPokemon from "@/store/detail/my-pokemon"
  import { onMount } from "svelte";
  let lengthMyPokemon = 0
  onMount(() => {
    myPokemon.subscribe( val => lengthMyPokemon = val.length)
  })
</script>

<style>
	.container-navbar{
		display: flex;
    justify-content: space-between;
	}
  .link-page{
    padding-right: 10px;
  }
  @media only screen and (max-width: 490px) {
    .text-total{
      display: none
    }
  }
  @media only screen and (min-width: 490px) {
    .text-total-extra{
      display: none;
    }
  }
</style>

<Router url="">
  <nav class="container-navbar">
    <div>
      <span class="link-page"><a href="/" use:link >Home</a></span>
      <span class="link-page"><a href="/my-pokes" use:link>My Pokemon List<span class="text-total-extra">(total: {lengthMyPokemon})</span></a></span>
    </div>
    <div class="text-total">Pokemon have been caught: {lengthMyPokemon}</div>
  </nav>
</Router>