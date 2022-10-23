<template>
  <div>
    <div class="up-bar">
        <p><img :src="`${profile[0].userImage}`" alt=""></p>
        <p>0 <span>게시물</span></p>
        <p>28 <span>팔로우</span></p>

    </div>
    <div class="my-name">{{profile[0].name}}
        <span>{{profile[0].text}}</span>
    </div>
    <div class="my-picture">
        <ul >
            <li ><img  :src="`${profile[1][1]}`" alt=""></li>
         
        </ul>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'

export default {
    name: 'MyPost',
    data(){
        return{

        }
    },computed :{
   ...mapState(['profile']),

  },

}
</script>

<style>
.up-bar{display: flex; padding-top: 10px;}
.up-bar p{width: 33.3333%;  text-align: center; font-weight: bold;}
.up-bar p img{width: 60%; border-radius: 50%;  }
.up-bar p span{display: block;}
.up-bar p:first-child{text-align: left;}
.my-name{padding: 20px 0 40px 70px; font-weight: bold; }
.my-name span{display: block;font-weight: 500;}
.my-picture ul{display: flex; flex-wrap: wrap;width: 100%;  box-sizing: border-box; border-top: 2px solid #eee;}
.my-picture ul li{width: 33.3333%; height: 150px;box-sizing: border-box; border: 1px solid #fff;}
.my-picture ul li img{width: 100%; height: 100%;}
</style>