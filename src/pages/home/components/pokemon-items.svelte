<script>
  import PokemonItem from "@/pages/home/components/pokemon-item.svelte";
  export let datas 
</script>

<ul>
  {#each datas as {name}}
    <PokemonItem {name} />
  {/each}
</ul>