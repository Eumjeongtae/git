<template>
<div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step = 2" v-if="step == 1">Next</li>
      <li v-if="step == 2"  @click="puplish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>


  <!-- <button @click="$store.commit('콘솔')"> 버튼</button> -->
  <!-- <p>{{$store.state.more}}</p> -->
  <Container :이미지='이미지' :step='step' :이미지필터적용='이미지필터적용' :id값은='id값은'   @titleFromChild="작성한글  = $event.target.value" />
  <!-- <button @click="more" >더보기</button> -->
  <button v-if="step == 0" @click="getData">더보기</button>
  <div>
    
  </div>
  <div class="footer">
    <ul class="foot-dategory">
      <li><i class="xi-home" @click="step = 0"></i></li>
      <li><i class="xi-search"></i></li>
      <li><i class="xi-play-circle"></i></li>
      <li><i class="xi-man" @click="step = 4"></i></li>
      
    </ul>
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
    
 </div>


</template>

<script>
 import Container from './components/Container.vue'
import data from './assets/insta.js';
import axios from 'axios';
import { mapActions, mapState} from 'vuex'
axios.post()


export default {
  name: 'App',
  data(){
    return{
            인스타원본 : [...data],
            인스타 : data,
            // z : 0,
            step : 0,
            이미지 :'' ,
            이미지필터적용:'',
            id값은 : '',
            

    }
  },
  mounted(){

    this.emitter.on('작명',(a)=>{
      this.이미지필터적용 = a;
      // console.log(this.이미지필터적용)

    });
    this.emitter.on('id값2',(b)=>{
     this.id값은 = b;
    //  console.log(this.id값은);
     this.step = 5;
   });
    this.emitter.on('step3',(b)=>{
    //  console.log(this.id값은);
     this.step = b;
   });
   for(let i=0; i <this.profile[1].length; i++){
   this.인스타.push(this.profile[1][i]);
   }

    this.인스타.sort((a, b) => new Date(b.dates) - new Date(a.dates))
   
  
  },
  components: {
    Container : Container,
    
  },
  computed :{
   ...mapState(['insta']),
   ...mapState(['profile']),

  },
  methods :{
    ...mapActions(['getData']),

    // ...mapMutations([])
    
    // more(){
    //   axios.get(`https://codingapple1.github.io/vue/more${this.z}.json`)
    //   .then( 결과 => {
    //     this.인스타.push(결과.data)
    //   })
    //   this.z++

    // },
    upload(e){
     let 파일 = e.target.files;
     this.이미지 = URL.createObjectURL(파일[0])

     this.step=1;
    },

    puplish(){
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;
    console.log(dateStr);

      var 내게시물 = {
         name: this.profile[0].name,
      userImage: this.profile[0].userImage,
      postImage: this.이미지,
      likes: 0,
      date: `${year}년 ${month}월 ${day}일`,
      dates: dateStr,
      liked: false,
      content: this.작성한글 ,
      filter: this.이미지필터적용
      };
      this.insta.unshift(내게시물);
      this.profile[1].unshift(내게시물);
      this.step=0
    },
 
  },
}
</script>

<style>
 

  body {
    margin: 0;
  }
  ul {
    padding: 5px;
    list-style-type: none;
  }
  .foot-dategory{
    border-top: 1px solid #eee;
    padding-top: 20px;
    display: flex;
  }
  .foot-dategory li{
    text-align: center;
    font-size: 30px;
    width: 25%;
    cursor: pointer;
  }
  .logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
  }
  .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
  }
  .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
  }
  .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }
  .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: #eee;
  }
  .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
  }
  .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
  }
  .inputfile {
    display: none;
  }
  .input-plus {
    cursor: pointer;
  }
  #app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }

</style>
