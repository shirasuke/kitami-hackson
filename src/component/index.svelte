<script lang="ts">
	import { createMap } from "../api/googleMap/createMap";
	import { onMount } from "svelte";
  
  let googleMap: google.maps.Map;
  onMount(async () => {
    //const org = getOrgAndId();
    googleMap = await createMap({
      centerLatitude: Number(42),
      centerLongitude: Number(143),
    });
  });
</script>

<div id="map" />
<div>test</div>
