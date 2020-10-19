<script>
	import { Link } from "svelte-routing";
  export let name;
</script>

<style>
  .text-name{
    color: #2f5e30;
    font-weight: 700;
    display: block;
    padding: 7px 0 7px 0;
    border-bottom: 1px solid #dedede;
  }
</style>

<li>
  <Link to={`/detail/${name}`}>
    <span class="text-name">{name}</span>
  </Link>
</li>