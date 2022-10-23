  <template>
<div style="padding:10px;">
  <h4>{{followerLength}} 팔로워</h4>
  <input  @input="search($event.target.value)" placeholder="검색" />
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{follower[i]?.name}}</span>
  </div>
</div> 

</template>

<script>
import {computed, onMounted,ref} from 'vue';
import axios from 'axios';
export default {
    name: 'mapage',
  
    setup(){
      
        let follower = ref([]);
        let followerLength = ref([]);
        let followerOriginal = ref([]);

          function search(검색어){
            let newFollower  = followerOriginal.value.filter((a)=>{
              
                return   a.name.toLowerCase().indexOf(검색어.toLowerCase()) != -1;
            });
            follower.value = [...newFollower ]
            
        }
        

    
        onMounted(() => {
              axios.get('/follower.json').then((a)=>{
          follower.value =  a.data
          followerLength.value =  a.data.length
          followerOriginal.value = [...a.data];
        })
        })

            let 결과 =computed(function (){
            return follower.value
        })
        console.log(결과.value);

      

        return {follower,followerLength, search}
    },
    data(){
        return{

        }
    },
   
}
</script>

<style>

</style>