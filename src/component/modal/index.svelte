<script lang="ts">
	import { uploadLatitude, uploadLongitude } from "../../api/store";
	import { handleCloseModal } from "../../shared/modal/handleCloseModal";


  export let isOpen: boolean;
 //export let survey: RegularSurvey;
 

  const callback = async () => {
    //await refetch();
    handleCloseModal;
  };
  const handleUpload = async()=>{
    try {
      const requestBody = {
        latitude:$uploadLatitude.toString(),
        longitude:$uploadLongitude.toString(),
        user_id:1
      };

      const response = await fetch('http://localhost:8000/snow/new_post',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      const data = await response.json();
      console.log(data);
      handleCloseModal();
    } catch (error) {
    console.error('Error sending request:', error);
  }
  }
</script>

{#if isOpen}
  <div role="dialog" class="modal" id="fix">
    <div class="contents">
      <div class="header">
        <button class="button" on:click={handleCloseModal}>
          <div class="close" />
          <div>閉じる</div>
        </button>
      </div>
      <div class="body">
        <div class="container">
          
          <div class="text-area">
            <!-- <div>調査日：{survey.takenDate}</div>
            <div>住所：{survey.address}</div>
            <Form caption={survey.caption} id={survey.id} refetch={callback} /> -->
            <p>この地点を登録しますか？</p>
            <button on:click={()=>{handleUpload()}}>登録する</button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 2rem;
    pointer-events: auto; /* required */
  }

  .contents {
    background: white;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: auto;
    pointer-events: auto; /* required */
  }

  .header {
    height: 10px;
    padding: 1rem;
    display: grid;
    justify-content: flex-end;
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    padding: 1rem;

    /* TODO: あとでスタイリング */
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    /* TODO: あとでスタイリング */
  }

  .close {
    display: block;
    width: 25px; /*枠の大きさ*/
    height: 25px; /*枠の大きさ*/
    position: relative;
  }

  .close::before,
  .close::after {
    content: "";
    display: block;
    width: 100%; /*バツ線の長さ*/
    height: 5px; /*バツ線の太さ*/
    background: #000;
    transform: rotate(45deg);
    transform-origin: 0% 50%;
    position: absolute;
    top: calc(14% - 5px);
    left: 14%;
  }

  .close::after {
    transform: rotate(-45deg);
    transform-origin: 100% 50%;
    left: auto;
    right: 14%;
  }

  .body {
    display: grid;
    place-items: center;
    padding: auto;
  }
</style>
