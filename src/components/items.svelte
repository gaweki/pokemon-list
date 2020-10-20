<script>
  import Item from "./item.svelte";
  export let datas, type 
</script>

<ul>
  {#each datas as data, i }
    <Item name={type === "moves" ? data.move.name : data.type.name} />
  {/each}
</ul>