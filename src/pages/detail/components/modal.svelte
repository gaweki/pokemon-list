<script>
  import detail from "@/store/detail/detail";
  import modal from "@/store/detail/modal";
  import myPokemon from "@/store/detail/my-pokemon"
  let newName = ""
  let currentDetail = {}

  detail.subscribe( val => currentDetail = val)
  const { name } = currentDetail

  function handleSubmit(){
    let pokemons = []
    myPokemon.subscribe(val => pokemons = val)
    let addNewObj = {
      basePoke: name,
      detail: currentDetail.detail,
      newName,
      id: pokemons.length + 1
    }
    myPokemon.addPoke(addNewObj)
    modal.setShowModal(false)
  }

  function handleOverLay(){
    modal.setShowModal(false)
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
    height: 200px;
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
  }
</style>

<div class="outbox-modal">
  <div class="overlay" on:click={handleOverLay}>
  </div>
  <div class="container-modal">
    <div class="container-body">
      <h3>You get {name}</h3>
      <div>Submit for save this</div>
      <input type="text" placeholder="Input New Name" bind:value={newName}>
      <button type="button" on:click={handleSubmit}>Submit</button>
    </div>
  </div>
</div>