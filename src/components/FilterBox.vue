<template>
  <div class=" filter-item" :class="`${필터들} `"  @click="fire"  :style="`background-image:url(${이미지})`">
      <slot></slot>
    </div> 
  
</template>

<script>
export default {
    name : 'filterbox',
    props :{
      이미지: String,
      필터들: Array,
      이미지필터적용: String,

    },
    methods :{
      fire(){
        this.emitter.emit('작명',this.필터들)
      }
    },

}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>