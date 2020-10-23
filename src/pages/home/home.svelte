<svelte:head>
	<title>Pokemon List</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import PokemonItems from "@/pages/home/components/pokemon-items.svelte";
  import { handleFetch } from '@/helpers';

  let page = 1;
  let datas = {};
  let loading = {
      loading1: false
    };
  let loadingGlobal = true;
  let arrPage = []
  let resPerPage = 30
  let currentTotalResults = 0
  let totalResources = 0

  onMount(async () => {
    loading = {
      ...loading,
      loading1: true
    }
    arrPage.push(page)
    
    try{
      const res = await handleFetch(`${__apps__.env.basePokeAPI}pokemon?offset=0&limit=${resPerPage}`)
      const { count, results } = res
      datas = {
        ...datas,
        datas1: [...results]
      }
      loading = {
        ...loading,
        loading1: false
      }
      loadingGlobal = false

      totalResources = count
      currentTotalResults = resPerPage

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
      fetch(`${__apps__.env.basePokeAPI}pokemon?offset=${page*resPerPage}&limit=${resPerPage}`)
        .then(response => response.json())
        .then(data => {
          const { results } = data

          datas = {
            ...datas,
            ["datas"+nPage]: [...results]
          }
          loading = {
            ...loading,
            ["loading"+nPage]: false
          }
          loadingGlobal = false

          currentTotalResults = currentTotalResults + resPerPage

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
    height: 32.78px;
  }
</style>

<ul>
  <h1>List All Pokemon</h1>
  {#each arrPage as seq}
    <PokemonItems datas={datas["datas"+seq]} />
  {/each}
  <div class="container-load-more">
    {#if !loadingGlobal && currentTotalResults <= totalResources }
      <button on:click={handleLookMore}>Load More</button>
    {/if}
  </div>
</ul>