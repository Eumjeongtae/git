<template>
  <div>
    <div v-if="step == 0">
    <Post   v-for="(작명,i) in $store.state.insta" :key="i" :i=i   :이미지필터적용='이미지필터적용'   />
    </div>
  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div class="upload-image" :class="이미지필터적용" :style="`background-image:url(${이미지})`"></div>
    <div class="filters">
      <FilterBox  :필터들='필터들' :이미지필터적용='이미지필터적용'  v-for="(필터들,i) in 필터" :key="i" :이미지='이미지' >
        {{필터들}}
      </FilterBox>
    </div>
  </div>

<!-- 글작성페이지 -->
<div  v-if="step == 2">
    <div class="upload-image" :class="이미지필터적용" :style="{ backgroundImage : `url(${이미지})`}"></div>
    <div class="write">
      <textarea class="write-box" @input = "$emit('titleFromChild', $event)">write!</textarea>
    </div>
  </div>

<!-- 팔로워페이지 -->

  <div v-if="step == 3">
  <MyPage  />
</div>

<!-- 내게시물 -->
<div v-if="step == 4">
<MyPost  />
</div>

<!-- 내게시물 자세히 보기 -->
<div v-if="step == 5">
<MyPostDtail :이미지필터적용='이미지필터적용' :id값은='id값은' />
</div>

  </div>
</template>



<script>
 import Post from './Post.vue'
 import FilterBox from './FilterBox.vue'
 import MyPage from './MyPage.vue'
 import MyPost from './MyPost.vue'
 import MyPostDtail from './MyPostDtail.vue'
export default {
  name: 'Container',
  components: {
    Post : Post,
    FilterBox,
    MyPage,
    MyPost,
    MyPostDtail,

  },
  data(){
  return{
    필터 :[ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
  }},
   props : {
      인스타: Array,
      step: Number,
      이미지: String,
      이미지필터적용: String,
      id값은 : Number,
    }

}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;

}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>