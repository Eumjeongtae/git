<template>

  <div class="post" >
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${$store.state.insta[i].userImage})`}"></div>
      <span class="profile-name">{{$store.state.insta[i].name}}</span>
    </div>
    <div class="post-body"  @click="$store.commit('좋아요',i)" :class="$store.state.insta[i].filter" :style="{ backgroundImage : `url(${$store.state.insta[i].postImage})`}"></div>
    <!-- <div class="post-body"  @click="$store.commit('좋아요',i)" :class="$store.state.insta[i].filter" :style="{ backgroundImage : `url(${$store.state.insta[i].postImage})`}"></div> -->
    <div class="post-content">
      <p>{{$store.state.insta[i].likes}}</p>
      <!-- <p>{{$store.state.likes[i]}}</p> -->
      <p><strong>{{$store.state.insta[i].name}}</strong> {{$store.state.insta[i].content}}</p>
      <p class="date">{{$store.state.insta[i].date}}</p>
    </div>
</div> 
</template>

<script>
export default {

   props : {
      인스타: Array,
      이미지필터적용: String,
      i:Number,
    }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>