<script>
	import { Router, Route } from "svelte-routing";
	import Navbar from "@/components/navbar.svelte";
	import Home from "@/pages/home";
	import Detail from "@/pages/detail";
	import MyPokemons from "@/pages/my-pokemons";
	export let url = "";
</script>

<style>
	:global(ul) {
		list-style-type: none;
    padding: 0;
	}
	:global(main) {
		max-width: 500px;
		margin: 0 auto;
	}
	:global(a) {
		cursor: pointer;
	}
	:global(ul > li:last-child) {
		border-bottom: none;
	}
	:global(.overflow-hidden) {
		overflow: hidden;
	}
</style>

<Router url="{url}">
  <div>
		<Navbar />
		<main>
			<Route path="my-pokes" component="{MyPokemons}" />
			<Route path="detail/:name/:basePoke" let:params>
				<Detail name="{params.name}" basePoke="{params.basePoke}" />
			</Route>
			<Route path="/"><Home /></Route>
		</main>
  </div>
</Router>
