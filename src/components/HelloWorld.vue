<template>
  <div class="wrap">
    <div class="header">
        任务计划列表
    </div>
    <div class="main">
      <input class="inp" type="text"  placeholder="例如:吃饭睡觉打豆豆，回车添加任务" v-model="txt" @keydown="addFn">
      <div class="cont">
        <p>总任务:<span>{{list.length}}个</span>,<span >已完成<span>{{many}}</span>个</span><span><input type="checkbox"  v-model="isTrue" value="未完成"> 未完成</span><span><input type="checkbox" v-model="isTrue" value="已完成">已完成</span></p>
        <h4>任务列表:</h4>
        <ol>
          <li v-for="(item,index) in typeAll" :key="index">{{item.name}} <span class="del" @click="delItem(item.id)">删除</span><span v-if="item.checkType==='已完成'"
          class="wancheng">已完成</span><span v-else 
          class="weiwancheng" @click="changeType(item.id)">未完成</span></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      txt:"",
      isTrue:[],
      list:[
        {
          name:"吃饭",
          id:new Date()*1,
          checkType:"未完成",
        }
      ]
    }
  },
  computed:{
    many(){
      return this.list.filter(item=>item.checkType==="已完成").length
    },
    typeAll(){
      if(this.isTrue.length===0||this.isTrue.length===2){
        return this.list
      }else{
        return this.list.filter(item=>item.checkType===this.isTrue[0])
      }
    }
  },
  methods:{
    addFn(e){
      if(e.keyCode===13 && this.txt.trim()){
        let obj={
        name:this.txt,
        id:new Date()*1,
        checkType:"未完成"
      }
      this.list.push(obj)
      this.txt=''
      }
    },
    changeType(id){
      this.list.find(item=>item.id===id).checkType="已完成";
    },
    delItem(id){
      this.list.splice(this.list.findIndex(item=>item.id===id),1);
      this.wancheng=this.list.filter(item=>item.checkType===true).length
    }
  }
}
</script> 
<style lang="scss" scoped>
  .wrap{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    height: 45px;
    justify-content: center;
    align-items: center;
    background: orangered;
    font-size: 20px;
    color: aliceblue;
  }
  .main{
    flex: 1;
    width: 100%;
    overflow: auto;
    padding: 10px;
  }
  .inp{
    width:  80%;
    height: 30px;
    text-indent: 1em;
  }
  .del{
    background: #ccc;
    color: aliceblue;
    margin-right:10px;
  }
  .wancheng{
    background: deeppink;
    color: aliceblue;
  }
  .weiwancheng{
    background: chartreuse;
    color: aliceblue;
  }
  
</style>