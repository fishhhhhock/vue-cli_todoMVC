<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="changeItem(todo.id)"/>
      <!--  -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.name }}</span>
      <input v-show="todo.isEdit"  type="text" :value="todo.name" @blur="handleBlur(todo,$event)">
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
    <button class="btn btn-edit" @click="editItem(todo)" v-show="!todo.isEdit">编辑</button>

  </li>
</template>

<script>
	  import pubsub from "pubsub-js";
import func from 'vue-editor-bridge';
    export default {
      name: "MyItem",
      props:['todo'],
      methods: {
        changeItem(id){
          // this.checkTodo(id)
          this.$bus.$emit('checkTodo',id)
        },
        deleteItem(id){
          if(confirm('确定删除吗？')){
            // this.deletetodo(id)
          // this.$bus.$emit('deletetodo',id)
            pubsub.publish('deletetodo',id)
          }
        },
        editItem(todo){
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true
          }else{
            this.$set(todo,'isEdit',true)
          }
          // 模板重新编译后自动聚焦到需要修改的输入框
          this.$nextTick(function () {
            this.$refs.inputTitle.focus()
          })
        },
        handleBlur(todo,e){
          todo.isEdit = false
          if(!e.target.value.trim()) return alert('输入不能为空') 
          // console.log('updateTodo',todo.id,e.target.value);
          this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }

      },
    };
</script>

<style>
    /*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }
    
    li label {
      float: left;
      cursor: pointer;
    }
    
    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
    
    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }
    
    li:before {
      content: initial;
    }
    
    li:last-child {
      border-bottom: none;
    }
    
    li:hover{
      background-color: #ddd;
    }

    li:hover button{
      display: block;
    }


</style>