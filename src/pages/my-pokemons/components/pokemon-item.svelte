<script>
  import myPokemon from "@/store/detail/my-pokemon"
  import Items from "@/components/items.svelte"
  export let name, id, detail;

  let showDetail = false
  function handleRelease() {
    myPokemon.deletePoke(id)
  }

  function handleDetail() {
    showDetail = !showDetail
  }
</script>

<style>
  .text-name{
    color: #2f5e30;
    font-weight: 700;
    display: block;
    padding: 7px 0 7px 0;
    cursor: pointer;
  }
  li{
    border-bottom: 1px solid #dedede;
  }
  .container-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-release{
    background-color: red;
    color: white;
    font-size: 12px;
    cursor: pointer;
    padding: 3px 7px;
    border-radius: 5px;
  }
  .text-close{
    font-weight: 400;
    font-size: 12px;
    color: black;
  }
  .container-detail{
    padding: 10px 0;
  }
  h4{
    margin: 10px 0;
  }
</style>

<li>
  <div class="container-list">
    <span on:click={handleDetail} class="text-name">{name} <span class="text-close">{showDetail ? "click again to close detail" : "click to show detail"}</span></span>
    <span class="btn-release" on:click={handleRelease}>Release</span>
  </div>
  {#if showDetail}
    <div class="container-detail">
      <h4>Types</h4>
      <ul>
        <Items datas={detail.types} type="types" />
      </ul>

      <h4>Moves</h4>
      <ul>
        <Items datas={detail.moves} type="moves" />
      </ul>
    </div>
  {/if}
</li>