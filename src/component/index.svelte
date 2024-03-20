<script lang="ts">
	import { createMap } from "../api/googleMap/createMap";
	import { onMount } from "svelte";
	import { putMarker } from "../api/marker/putMarker";
	import { getSurvey } from "../api/getSurvey";
  
  let googleMap: google.maps.Map;
  let markers: google.maps.Marker[] = [];

  onMount(async () => {
    //const org = getOrgAndId();
    googleMap = await createMap({
      centerLatitude: Number(43.80494),
      centerLongitude: Number(143.893786),
    });
    await initialData();
  });

  const initialData =async ()=>{
    const vs = await getSurvey()
    console.log(vs)
    markers = vs.map((v)=>putMarker(v, googleMap))
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