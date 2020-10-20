<script>
  import { onMount } from 'svelte';
  import detail from "@/store/detail/detail"
  import Items from "@/pages/detail/components/items.svelte"
  import Footer from "@/pages/detail/components/footer.svelte"
  import { capitalizeFirstLetter } from "@/helpers"
  export let name = capitalizeFirstLetter(name)
  let moves = [] 
  let types = []
  name = capitalizeFirstLetter(name)
  onMount(async () => {
    fetch(`${__apps__.env.basePokeAPI}pokemon/${name.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        moves = data.moves
        types = data.types

        let addCurrentDetail = {
          name,
          detail: data
        }
        detail.setCurrentDetailPoke(addCurrentDetail)
      })
      .catch(err => console.log(err))
  });
</script>

<svelte:head>
	<title>Detail {name}</title>
</svelte:head>

<style>
  ul{
    padding-bottom: 22px;
  }
</style>

<h1>Detail Page of {name} </h1>

<h3>Types</h3>
<ul>
  <Items datas={types} type="types" />
</ul>

<h3>Moves</h3>
<ul>
  <Items datas={moves} type="moves" />
</ul>

<Footer name={name} />

