<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addtodo="addtodo"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :deletetodo="deletetodo"/>
        <MyFooter :todos="todos" @checkAlltodo="checkAlltodo" @cleanAlltodo="cleanAlltodo"/>
      </div>
    </div>
  </div>
</template>

<script>
	import MyHeader from "./components/MyHeader.vue";
	import MyFooter from "./components/MyFooter.vue";
	import MyList from "./components/MyList.vue";

	export default {
	  components: { MyHeader, MyFooter, MyList },
	  name: "App",
	  data() {
    	return {
			// 由于todo是MyHeader组件和MyFooter组件都在使用，所以放在App中(状态提升)
    	  todos: JSON.parse(localStorage.getItem('todos')) || [],
    	};
	  },
	  methods: {
		// 增加一个todo
	    addtodo(todoObj) {
	      // 将用户输入包装成一个todo对象
		  this.todos.push(todoObj)
	    },
		// 勾选或取消勾选
		checkTodo(id){
			this.todos.forEach((todo) => {
				if(todo.id === id) todo.done = !todo.done
			})
		},
		// 删除一个todo
		deletetodo(id){
			// console.log(id);
			this.todos = this.todos.filter(todo => todo.id !== id)
		},
		// 全选或取消全选
		checkAlltodo(done){
			 this.todos.forEach(todo => {
				todo.done = done
				// console.log(this.todos);
			});
		},
		// 清除所有已完成
		cleanAlltodo(){
			this.todos = this.todos.filter(todo => todo.done == false)
		}
	  },
	  watch:{
		todos:{
			deep:true,
			handler(value){
				localStorage.setItem('todos',JSON.stringify(value))
			}
		}
	  }
	};
</script>

<style >
/*base*/
body {
  background: #fff;
}

.btn {
  /* display: inline-block; */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

