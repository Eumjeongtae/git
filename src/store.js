import axios from 'axios'
import { createStore } from 'vuex'
import data from './assets/insta.js';
import data2 from './assets/MyData.js'


const store = createStore({
  state(){
    return {
      profile : data2,
      insta : data,
      name:'kim',
      age:20,
      // likes :[36,20,49],
      // likeCheck :[false,false,false],
      more : {},
      z :0,
      // 이미지 :'' ,

    }
  },
  mutations: {
    
   
    setMore(state, data){
      state.more = data

      state.insta.push(state.more)
      state.z ++
    },
    이름변경(state){
      state.name = 'park'
    },
    나이오름(state,data){
      state.age += data
    },
    좋아요(state,i){
      if(state.insta[i].liked == true){
        state.insta[i].likes --;
        state.insta[i].liked = false

      }
     else if(state.insta[i].liked == false){
        state.insta[i].likes ++;
        state.insta[i].liked = true

      }
      
    },
    좋아요2(state,i){
      if(state.profile[1][i].liked == true){
        state.profile[1][i].likes --;
        state.profile[1][i].liked = false

      }
     else if(state.profile[1][i].liked == false){
        state.profile[1][i].likes ++;
        state.profile[1][i].liked = true

      }
      
    },
    
  },
  actions: {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more${context.state.z}.json`).then((a) =>{
        context.commit('setMore',a.data)
      })
    },
  },
})

export default store