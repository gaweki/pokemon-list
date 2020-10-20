<script>
  import { Link } from "svelte-routing";
  import myPokemon from "@/store/detail/my-pokemon"
  export let name, id;

  function handleRelease() {
    myPokemon.deletePoke(id)
  }
</script>

<style>
  .text-name{
    color: #2f5e30;
    font-weight: 700;
    display: block;
    padding: 7px 0 7px 0;
  }
  li{
    border-bottom: 1px solid #dedede;
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
</style>

<li>
  <Link to={`/detail/${name}`}>
    <span class="text-name">{name}</span>
  </Link>
  <span class="btn-release" on:click={handleRelease}>Release</span>
</li>