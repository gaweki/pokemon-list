<script>
  import PokemonItem from "@/pages/my-pokemons/components/pokemon-item.svelte";
  import myPokemon from "@/store/detail/my-pokemon"
  import { onMount } from "svelte";
  let datas = []

  onMount(async () => {
    try{
      myPokemon.subscribe(val => datas = val)
    } catch(e){
      if(e) console.log(e)
    }
  });
</script>

<ul>
  {#each datas as {newName, id}}
    <PokemonItem name={newName} {id}/>
  {/each}
</ul>