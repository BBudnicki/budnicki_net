<template lang="">
    <LMap
      id="main-map"
      :options="mapOptions"
      :bounds="bounds"
      @update:zoom="mapSetZoomCurrent"
      @update:center="mapSetCenterCurrent"
      @update:bounds="mapSetBoundsCurrent"
      ref="map"
    >
    <LTileLayer :url="tileLayer.url" :attribution="tileLayer.attribution"></LTileLayer>

    </LMap>
</template>
<script>
//import L from 'leaflet';
import {
  LMap,
  LTileLayer,
} from "vue2-leaflet";
import { latLng, latLngBounds, divIcon, circleMarker } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
//import MapMarker from "./Marker.vue";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
//    MapMarker,
  },
  data() {
    return {
      tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      },
      storyLayerEsriObject: null,
      mapOptions: {
        preferCanvas: true,
        zoomSnap: 0.5,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 12,
        minZoom: 2,
//        maxBounds: latLngBounds(latLng(110, -200), latLng(-75, 200)),
        zoomControl: false,
      },
      bounds: null,
    };
  },
  computed: {
    ...mapGetters({
     // zoom: "mapGetZoomNew",
      mapGetBoundsNew: "mapGetBoundsNew",
    }),
  },
  methods: {
    ...mapMutations([
      "mapSetZoomCurrent",
      "mapSetCenterCurrent",
      "mapSetBoundsCurrent",
      "toggleVideoFrame",
    ]),
  },
  mounted() {
    this.$refs.map.mapObject.flyToBounds(this.mapGetBoundsNew.bounds, {
      duration: 6,
    });
  },
  watch: {
    mapGetBoundsNew: function (newObject) {
      this.$nextTick(() => {
        console.log("mapGetBoundsNew watcher");
        this.$refs.map.mapObject.flyToBounds(newObject.bounds, {
          duration: newObject.duration,
        });
      });
    },
    basemap: function (newBaseMap, oldBaseMap) {
      this.$refs.map.mapObject.addLayer(newBaseMap);
        this.$nextTick(() => {
            this.$refs.map.mapObject.removeLayer(oldBaseMap);
        });

    },
    storyLayer: function (newLayer, oldLayer) {
      // remove old layer whenever a new story is selected
      if (oldLayer) {
        this.$nextTick(() => {
          this.$refs.map.mapObject.removeLayer(oldLayer);
        });
      }
      if (newLayer) {

        this.$nextTick(() => {
          this.$refs.map.mapObject.addLayer(this.storyLayerEsriObject);
        });
      }
    },
  },
};
</script>
<style lang="scss">
#main-map{
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
}
</style>
