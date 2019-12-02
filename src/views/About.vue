<template>
  <div class="about">
    <input type="text" v-model="txt" @keydown="addFn">
     <ul>
     
       <li v-for="(item,index) in list" :key="index">
        <input type="checkbox" v-model="item.checkedType" @change="changeCheckedType">
        <span v-if="!item.flag">{{item.name}}</span>
        <input  v-else type="text"  v-model="item.name" @blur="Save(item.id)">
        <button @click="upData(item.id)">编辑</button>
        <button @click="delData(item.id)">删除</button>
       </li>
     </ul>
     <label> <input type="checkbox" v-model="checkAll"  @change="changeAll">全选</label>
     <button @click="delAll">删除选中</button>
  </div>

</template>
<script>
  export default {
      data(){
        return {
          txt:'',
          list:[
            {
              name:"项目整合",
              flag:false,
              id:new Date()*1,
              checkedType:false
            }
          ],
          checkAll:false
        }
      },
      methods:{
        //添加列表项
        addFn(e){
          if(e.keyCode===13 && this.txt.trim()){
            let obj={
              name:this.txt,
              flag:false,
              id:new Date()*1,
              checkedType:false
            }
            this.list.push(obj)
            this.txt=''
          }
        },
        //选中修改列表那一项
        upData(id){
          this.list.find(item=>item.id===id).flag=true
        },
        //失去光标保存那一项数据
        Save(id){
          this.list.find(item=>item.id===id).flag=false
        },
        //删除
        delData(id){
          let index=this.list.findIndex(item=>item.id===id)
          this.list.splice(index,1)
        },
        //选中所有得  全选框选中
        changeCheckedType(){
          this.checkAll=this.list.every(item=>item.checkedType===true)
        },
        //全选||反选
        changeAll(){
          this.list.forEach(item=>item.checkedType=this.checkAll)
        },
        //删除选中
        delAll(){
          this.list=this.list.filter(item=>item.checkedType===false)
          this.checkAll=false
        }
      }
  }
</script>

<style lang="scss">
  .about{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }

</style>
