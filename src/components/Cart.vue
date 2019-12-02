<template>
  <div class="cartWrap">
      <div class="main">
          <div class="shop">
            <dl v-for="(item,index) in list" :key="index">
                <dt></dt>
                <dd>
                    <p>商品:{{item.title}}</p> 
                    <p>单价:{{item.price}}元</p> 
                    <p><button  @click="subCount(item.id)" :disabled="item.flag">-</button>{{item.count}}<button @click="addCount(item.id)">+</button></p> 
                </dd>
            </dl>
          </div>
      </div>
      <div class="footer">
        <div class="btm">
            <span>数量:{{totle}}件</span><span>总价:{{totlePrice.toFixed(2)}}元</span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    
    data(){
        return {
            // list:[
            //     {
            //         title:"瓜子",
            //         count:0,
            //         price:12,
            //         id:0
            //     },
            //     {
            //         title:"花生",
            //         count:0,
            //         price:10,
            //         id:1
            //     },
            //     {
            //         title:"香蕉",
            //         count:0,
            //         price:3.8,
            //         id:2
            //     }
            // ]
        }
    },
    created(){
        this.$store.dispatch("getList")
    },
    computed:{
        ...mapState(['list']),
        ...mapGetters(["totle","totlePrice"])
        // totle(){
        //    return this.list.reduce((item,con)=>{
        //        return  item+=con.count
        //     },0) 
        // },
        // totlePrice(){
        //    return this.list.reduce((item,con)=>{
        //        return  item+=(con.count*con.price)
        //     },0) 
        // }
    },
    methods:{
        addCount(id){
            this.$store.commit("addCounts",{id})
        },
        // addCount(id){
        //     let newList=JSON.parse(JSON.stringify(this.list))
        //     newList.find(item=>{
        //         if(item.id===id){
        //             item.count++
        //         }
        //     })
        //     this.list=newList
        // },
        subCount(id){
            this.$store.commit("subCounts",{id})
        //     let newList=JSON.parse(JSON.stringify(this.list))
        //     newList.find(item=>{
        //         if(item.id===id){
        //             item.count>0?item.count--:''
        //         }
        //     })
        //     this.list=newList
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartWrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main{
        width: 100%;
        flex:1;
        overflow: auto;
    }
    .shop{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        dl{
            width: 100%;
            height: 150px;
            border-bottom:1px solid;
        }
    }
    .footer{
        width: 100%;
        height: 50px;
        background: chocolate;
    }
    
</style>