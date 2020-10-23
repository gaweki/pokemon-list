<script>
  import { onMount } from 'svelte';
  import detail from "@/store/detail/detail"
  import Items from "@/components/items.svelte"
  import Footer from "@/pages/detail/components/footer.svelte"
  import { capitalizeFirstLetter, handleFetch } from "@/helpers"
  export let name = capitalizeFirstLetter(name)
  let moves = [] 
  let types = []
  let imgSrc = ""
  name = capitalizeFirstLetter(name)
  onMount(async () => {
    try{
      const res = await handleFetch(`${__apps__.env.basePokeAPI}pokemon/${name.toLowerCase()}`)
      moves = res.moves
      types = res.types
      imgSrc= res.sprites.front_default

      let addCurrentDetail = {
        name,
        detail: res
      }
      detail.setCurrentDetailPoke(addCurrentDetail)
    } catch (e) {
      if(e) console.log(e)
    }
  });
</script>

<svelte:head>
	<title>Detail {name}</title>
</svelte:head>

<style>
  ul{
    padding-bottom: 35px;
  }
  .image-container{
    text-align: center;
    height: 99px;
    width: 100%;
  }
</style>

<h1>Detail Page of {name} </h1>

<div class="image-container">
  {#if imgSrc}
    <img src={imgSrc} alt={`Image of ${name}`}/>
  {/if}
</div>

<h3>Types</h3>
<ul>
  <Items datas={types} type="types" />
</ul>

<h3>Moves</h3>
<ul>
  <Items datas={moves} type="moves" />
</ul>

<Footer name={name} />

