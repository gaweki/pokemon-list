<script>
  import { onMount } from 'svelte';
  import Items from "@/pages/detail/components/items.svelte"
  import Footer from "@/pages/detail/components/footer.svelte"
  export let name
  let moves = [] 
  let types = []
  onMount(async () => {
    fetch(`${__apps__.env.basePokeAPI}pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        moves = data.moves
        types = data.types
      })
      .catch(err => console.log(err))
  });
</script>

<h1>Detail Page of {name.toUpperCase()} </h1>

<h3>Types</h3>
<ul>
  <Items datas={types} type="types" />
</ul>

<h3>Moves</h3>
<ul>
  <Items datas={moves} type="moves" />
</ul>

<Footer />

