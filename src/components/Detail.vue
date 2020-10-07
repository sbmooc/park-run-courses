<template>
   <div>
       <div v-if="showDetail" class="card shadow mb-4">
           <div class="card-header py-3">
               {{this.parkRunData.properties.EventLongName}}
           </div>
           <div class="card-body">
           <Detail-Map 
           v-bind:coordinates="parkRunData.geometry.coordinates" 
           v-bind:track="test"
           :key="parkRunData.id"/>
            {{this.parkRunData}}
           </div>
       </div>
       <div v-else class="card shadow mb-4">
           Select a park run on the map
       </div>
   </div> 
</template>
<script>
import DetailMap from './DetailMap.vue'
import CPSummerRouteTrack from '../../track.json'
export default {
    name: 'Detail',
    components:{
        DetailMap
    },
    computed: {
    },
    data(){
        return {
            parkRunData: {},
            showDetail: false,
            test: null
        }
    },
    methods: {
        toggleDisplay(){
            this.showDetail = true 
        }
    },
    mounted() {
    this.$root.$on('selectedParkRunEvent', event => {
        this.parkRunData = event.sourceTarget.feature 
        if (this.parkRunData.id == 154){
            this.test = CPSummerRouteTrack
        }
        this.toggleDisplay()
    });
}
}
</script>