<script>
  import Modal from "@/pages/detail/components/modal.svelte"
  import modal from "@/store/detail/modal";
  import { onMount } from "svelte";

  export let name;
  let showModal = false
  let isCaught

  onMount(() => {
    modal.subscribe( val => showModal = val.modal)
  })

  $: document.body.classList.toggle('overflow-hidden', showModal)

  function handleCatch(){
    isCaught = Math.random() >= 0.5

    modal.setShowModal(true)
    showModal = true
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
  <button on:click={handleCatch}>Catch This {name}!</button>
</div>
{#if showModal}
  <Modal {isCaught} />
{/if}