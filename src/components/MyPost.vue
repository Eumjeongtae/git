<template>
  <div>
    <div class="up-bar">
        <p><img :src="`${profile[0].userImage}`" alt=""></p>
        <p>{{profile[1].length}} <span>게시물</span></p>
        <p  @click="fire4" >{{followerLength}}<span>팔로우</span></p>

    </div>
    <div class="my-name">{{profile[0].name}}
        <span>{{profile[0].text}}</span>
    </div>
    <div class="my-picture">
        <ul >
            <li v-for="(내데이터,i) in profile[1]" :key="i"  :class="profile[1][i].filter">
                <img  :src="`${내데이터.postImage}`" :id="`${profile[1][i].id}`" @click="fire3"  alt="">
                </li>
         
        </ul>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import { onMounted,ref} from 'vue';
import axios from 'axios';

export default {
    name: 'MyPost',
    setup(){
      
        let followerLength = ref([]);

    

    
        onMounted(() => {
              axios.get('/follower.json').then((a)=>{
          followerLength.value =  a.data.length
        })
        })

      
      

      

        return {followerLength}
    },
    data(){
        return{

        }
    },computed :{
   ...mapState(['profile']),

  },methods:{
    
     fire3(){
        this.emitter.emit('id값2',event.currentTarget.id)
        console.log(event.currentTarget.id);
       },
     fire4(){
        this.emitter.emit('step3',3)
       },
  }

}
</script>

<style>
.up-bar{display: flex; padding-top: 10px; width: 100%;}
.up-bar p{width: 33.3333%; height: 76px; position: relative; line-height: 76px; text-align: center; font-weight: bold;}
.up-bar p:last-child{cursor: pointer;}
.up-bar p img{width: 60%; border-radius: 50%;  }
.up-bar p span{display: block; position: absolute; left: 50%; transform: translateX(-50%); top: 30px;}
/* .up-bar p:first-child{text-align: left;} */
.my-name{padding: 20px 0 40px 36px; font-weight: bold; }
.my-name span{display: block;font-weight: 500;}
.my-picture ul{display: flex; flex-wrap: wrap;width: 100%;  box-sizing: border-box; border-top: 2px solid #eee;}
.my-picture ul li{width: 33.3333%; height: 150px ;cursor: pointer; box-sizing: border-box; border: 1px solid #fff;}
.my-picture ul li img{width: 100%; height: 100%;}
</style>