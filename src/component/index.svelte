<script lang="ts">
	import { createMap } from "../api/googleMap/createMap";
	import { onMount } from "svelte";
	import { putMarker } from "../api/marker/putMarker";
  
  let googleMap: google.maps.Map;
  onMount(async () => {
    //const org = getOrgAndId();
    googleMap = await createMap({
      centerLatitude: Number(42),
      centerLongitude: Number(143),
    });
    initialData();
  });

  const initialData = ()=>{
    putMarker(42, 143, googleMap)
  }
</script>

<div id="map" />
<div>test</div>


<style>
  #map {
    display: flex;
    height: 500px;
    width: 100%;
  }
 
</style>