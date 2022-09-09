<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="changeItem(todo.id)"/>
      <!--  -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
  </li>
</template>

<script>
    export default {
      name: "MyItem",
      props:['todo','checkTodo','deletetodo'],
      methods: {
        changeItem(id){
          this.checkTodo(id)
        },
        deleteItem(id){
          if(confirm('确定删除吗？')){
            this.deletetodo(id)
          }
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