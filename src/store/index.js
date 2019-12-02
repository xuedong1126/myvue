import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters:{
    totle(state){
      return state.list.reduce((item,con)=>{
          return  item+=con.count
       },0) 
   },
   totlePrice(state){
      return state.list.reduce((item,con)=>{
          return  item+=(con.count*con.price)
       },0) 
   }
  },
  mutations: {
    con(state,action){
      state.list=action.list
    },
    addCounts(state,action){
      let newList=JSON.parse(JSON.stringify(state.list))
      newList.find(item=>{
          if(item.id===action.id){
              item.count++
          }
      })
      state.list=newList
  },
  subCounts(state,action){
    let newList=JSON.parse(JSON.stringify(state.list))
    newList.find(item=>{
        if(item.id===action.id){
            item.count>0?item.count--:''
        }
    })
    state.list=newList
}
  },
  actions: {
    getList(context){
      axios.get('/list').then(res=>{
        context.commit('con',{list:res.data.list})
      })
    }
  },
  modules: {
  }
})
