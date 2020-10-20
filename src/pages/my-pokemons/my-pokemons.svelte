<svelte:head>
	<title>My Pokemon List</title>
</svelte:head>

<script>
  import PokemonItems from "@/pages/my-pokemons/components/pokemon-items.svelte";
  import myPokemon from "@/store/detail/my-pokemon";

  function handleDeleteAll() {
    myPokemon.reset()
  }
</script>

<style>
  .container-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-delete-all{
    background-color: red;
    color: white;
    font-size: 12px;
    cursor: pointer;
    padding: 3px 7px;
    border-radius: 5px;
  }
</style>

<ul>
  <div class="container-title">
    <h1>List All My Pokemon </h1> <span class="btn-delete-all" on:click={handleDeleteAll}>Delete All</span>
  </div>
  <PokemonItems />
</ul>