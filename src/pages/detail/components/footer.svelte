<script>
  import Modal from "@/pages/detail/components/modal.svelte"
  import detail from "@/store/detail/detail";
  import modal from "@/store/detail/modal";
  import { onMount } from "svelte";

  export let name;
  let showModal = false

  onMount(() => {
    modal.subscribe( val => showModal = val.modal)
  })

  $: document.body.classList.toggle('overflow-hidden', showModal)

  function handleCaught(){
    let isCaught = Math.random() >= 0.5

    modal.setShowModal(isCaught)
    showModal = isCaught

    let objDetail = {}
    detail.subscribe( val => objDetail = val)
    console.log(objDetail)
  }
</script>

<style>
  .footer-container{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #dddddd;
    padding: 10px 0px;
  }

  button{
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    margin: 0;
    width: 290px;
  }
</style>
<div class="footer-container">
  <button on:click={handleCaught}>Caught This {name}!</button>
</div>
{#if showModal}
  <Modal />
{/if}