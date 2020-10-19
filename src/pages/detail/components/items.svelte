<script>
  import Item from "@/pages/detail/components/item.svelte";
  export let datas, type 
</script>

<ul>
  {#each datas as data }
    <Item name={type === "moves" ? data.move.name : data.type.name} />
  {/each}
</ul>