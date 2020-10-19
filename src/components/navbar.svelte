<script>
	import { Link } from "svelte-routing";
</script>

<style>
	.container-navbar{
		display: flex;
    justify-content: space-between;
	}
  .link-page{
    padding-right: 10px;
  }
</style>

<div class="container-navbar">
  <div>
    <span class="link-page"><Link to="/">Home</Link></span>
    <span class="link-page"><Link to="/detail">Detail</Link></span>
    <span class="link-page"><Link to="/my-pokes">My Pokemon List</Link></span>
  </div>
  <div>Pokemon have been caught: 9</div>
</div>