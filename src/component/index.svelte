<script lang="ts">
	import { createMap } from "../api/googleMap/createMap";
	import { onMount } from "svelte";
	import { putMarker } from "../api/marker/putMarker";
	import { getSurvey } from "../api/getSurvey";
  import Chat from "./form.svelte"
	import { getChats } from "../api/getChats";
  
  
  let googleMap: google.maps.Map;
  let markers: google.maps.Marker[] = [];
  let chatList:string[]=[];

  onMount(async () => {
    //const org = getOrgAndId();
    googleMap = await createMap({
      centerLatitude: Number(43.80494),
      centerLongitude: Number(143.893786),
    });
    await initialData();
  });

  const initialData = async ()=>{
    const vs = await getSurvey()
    const chats = await getChats()
    console.log(chats)
    markers = vs.map((v)=>putMarker(v, googleMap))
    chatList=chats
  }
</script>

<div id="map" />
  <label>〜チャット内容〜</label>
  <div class="list-area">
  {#each chatList as data}
    <p>ユーザー名：{data[0]}</p>
    {data[1]}
    {data[2]}
  {/each}
  </div>
<Chat />

<style>
  #map {
    display: flex;
    height: 500px;
    width: 100%;
  }

  label{
    font-weight: bold;
  }
  .list-area {
    max-height: 250px;
    overflow-y: auto;
    display: grid;
    gap: 1rem;
    background-color: white;
  }
 
</style>