<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{ total }} </span>
    <button class="btn btn-danger" @click="cleantodo">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props:['todos'],
    // data() {
      // return {
      // }
    // },
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        return this.todos.filter(todo => todo.done == true).length
      },
      isAll:{
        get(){
          return this.doneTotal == this.total && this.total > 0
        },
        set(value){
          // this.checkAlltodo(value)
          this.$emit('checkAlltodo',value) 
        }
      }
    },
    methods:{
      // checkAll(e){
        // console.log(e.target.checked);
        // this.checkAlltodo(e.target.checked)
      // }
      cleantodo(){
        // this.cleanAlltodo()
        this.$emit('cleanAlltodo')
      }
    }
  };
</script>

<style>
    /*footer*/
    .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
    }
    
    .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
    }
    
    .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }
    
    .todo-footer button {
      float: right;
      margin-top: 5px;
    }

</style>