<template>

  <div class="post" v-for="(내데이터,i) in profile[1]" :key="i">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${profile[1][i].userImage})`}"></div>
      <span class="profile-name">{{profile[1][i].name}}</span>
    </div>
    <div class="post-body"  @click="$store.commit('좋아요',i)" :class="profile[1][i].filter" :style="{ backgroundImage : `url(${profile[1][i].postImage})`}"></div>
    <!-- <div class="post-body"  @click="$store.commit('좋아요',i)" :class="$store.state.insta[i].filter" :style="{ backgroundImage : `url(${$store.state.insta[i].postImage})`}"></div> -->
    <div class="post-content">
      <p>{{profile[1][i].likes}}</p>
      <!-- <p>{{$store.state.likes[i]}}</p> -->
      <p><strong>{{profile[1][i].name}}</strong> {{profile[1][i].content}}</p>
      <p class="date">{{profile[1][i].date}}</p>
    </div>
</div>
</template>

<script>
import { mapState} from 'vuex'

export default {
    name: 'MyPostDetail',
    data(){
        return{

        }
    },computed :{
   ...mapState(['profile']),

  },

}
</script>

<style>

</style>