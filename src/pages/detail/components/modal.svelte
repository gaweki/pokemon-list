<script>
  import detail from "@/store/detail/detail";
  import modal from "@/store/detail/modal";
  import myPokemon from "@/store/detail/my-pokemon"

  export let isCaught
  let newName = ""
  let currentDetail = {}
  let textAlert = ""
  let disabledInput = false

  detail.subscribe( val => currentDetail = val)
  const { name } = currentDetail

  function handleSubmit(){
    if(newName){
      let pokemons = []
      myPokemon.subscribe(val => pokemons = val)
      let addNewObj = {
        basePoke: name,
        detail: currentDetail.detail,
        newName,
        id: pokemons.length + 1
      }
      myPokemon.addPoke(addNewObj)
      textAlert = "Success!"
      disabledInput = true
      setTimeout(() => {
        modal.setShowModal(false)
        textAlert = ""
      }, 2000); 
    } else {
      textAlert = "Nickname must filled"
      disabledInput = true
      setTimeout(() => {
        disabledInput = false
        textAlert = ""
      }, 2000); 
    }
  }

  function handleCloseModal(){
    modal.setShowModal(false)
  }

  function handleKeyInput(e){
    return e.keyCode === 13 ? handleSubmit() : ""
  }
</script>

<style>
  .overlay{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    cursor: pointer;
  }
  .outbox-modal{
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.6);
    left: 0;
  }
  .container-modal{
    text-align: center;
    background-color: white;
    width: 100%;
    max-width: 290px;
    height: 225px;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .container-body{
    line-height: 35px;
  }
  button{
    cursor: pointer;
    border-radius: 5px;
  }
  input{
    border-radius: 5px;
    width: 181.78px;
  }
  .text-alert{
    height: 35px;
  }
  .btn-close{
    position: absolute;
    right: 19px;
    top: 10px;
    font-weight: 700;
    cursor: pointer;
  }
</style>

<div class="outbox-modal">
  <div class="overlay" on:click={handleCloseModal}>
  </div>
  <div class="container-modal">
    <span class="btn-close" on:click={handleCloseModal}>x</span>
    {#if isCaught}
    <div class="container-body">
      <h3>You get {name}</h3>
      <div>Submit for save this</div>
      <input type="text" disabled={disabledInput} on:keydown={handleKeyInput} placeholder="Input New Nickname" bind:value={newName}>
      <button type="button" disabled={disabledInput} on:click={handleSubmit}>Submit</button>
      <div class="text-alert">{textAlert}</div>
    </div>
    {:else}
    <div class="container-body">
      Retry To Get {name}
    </div>
    {/if}
    
  </div>
</div>