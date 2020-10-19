<svelte:head>
	<title>Pokemon List</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import PokemonItems from "@/pages/home/components/pokemon-items.svelte";

  let page = 1;
  let datas = {};
  let loading = {
      loading1: false
    };
  let loadingGlobal = true;
  let arrPage = []

  onMount(async () => {
    loading = {
      ...loading,
      loading1: true
    }
    arrPage.push(page)
    
    try{
      fetch(`${__apps__.env.basePokeAPI}pokemon?offset=0&limit=10`)
        .then(response => response.json())
        .then(data => {
          const { next, previous, count, results } = data

          datas = {
            ...datas,
            datas1: [...results]
          }
          loading = {
            ...loading,
            loading1: false
          }
          loadingGlobal = false

        })
        .catch(err => console.log(err))

    } catch(e){
      if(e) console.log(e)
    }
  });

  const handleLookMore = async () => {
    let nPage = page+1
    loading = {
        ...loading,
        ["loading"+nPage]: true,
    }
    datas = {
      ...datas,
      ["datas"+(nPage)]: [],
    };
    arrPage.push(nPage)

    loadingGlobal = true

    try{
      fetch(`${__apps__.env.basePokeAPI}pokemon?offset=${nPage*10}&limit=10`)
        .then(response => response.json())
        .then(data => {
          const { next, previous, count, results } = data

          datas = {
          ...datas,
          ["datas"+nPage]: [...results]
        }
        loading = {
          ...loading,
          ["loading"+nPage]: false
        }
        loadingGlobal = false

        })
        .catch(err => console.log(err))

    } catch(e){
      if(e) console.log(e)
    }

    page = nPage;
  };
</script>

<style>
  button{
    cursor: pointer;
    outline: none;
    border-radius: 5px;
  }
  .container-load-more{
    margin-top: 20px;
    text-align: center;
  }
</style>

<ul>
  <h1>List All Pokemon</h1>
  {#each arrPage as seq}
    <PokemonItems datas={datas["datas"+seq]} />
  {/each}
  {#if !loadingGlobal}
  <div class="container-load-more">
    <button on:click={handleLookMore}>Load More</button>
  </div>
  {/if}
</ul>