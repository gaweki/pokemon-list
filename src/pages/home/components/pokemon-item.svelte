<script>
	import { link, Router } from "svelte-routing";
  export let name;
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
  }
</style>

<Router url="">
  <li>
    <a href={`/detail/${name}`} use:link >
      <span class="text-name">{name}</span>
    </a>
  </li>
</Router>