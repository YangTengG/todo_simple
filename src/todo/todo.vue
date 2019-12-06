<template>
  <section class="real-app">
    <input 
      v-model="message" 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="你想要做些什么呢？"
      @keyup.enter="addTodo"
    />
    <item
      :todo="todo"
      v-for="todo in filtedTodos"
      :key="todo.id"
      @delItem="deleteTodo"
    />
    <Tabs
      :selectedState="selectedState"
      :todos="todos"
      @toggle="toggleState"
      @delAllCompleted="delAllCompleted"
    />
  </section>
</template>

<script>
  import Item from "./item.vue";
  import Tabs from "./tabs.vue";
  export default {
    data() {
      return {
        message: '',
        selectedState: 'all',
        todos: [],
        id: 0
      }
    },
    computed: {
      filtedTodos() {
        if (this.selectedState == 'all') {
          return this.todos;
        }
        const isCompleted = this.selectedState === 'completed';
        return this.todos.filter(todo => todo.completed == isCompleted);
      }
    },
    methods: {
      addTodo() {
        if (this.message.trim() == '') {
          return;
        }
        this.todos.unshift({
          id: this.id++,
          content: this.message.trim(),
          completed: false
        });
        this.message = '';
      },
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
      },
      toggleState(state) {
        this.selectedState = state;
      },
      delAllCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
      }
    },
    components: {
      Item,
      Tabs,
    },
  }
</script>

<style lang='stylus' scoped>
  .real-app {
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
  }
  .add-input {
    position relative
    margin 0
    width 100%
    font-size 18px
    font-family: inherit
    font-weight: inherit
    line-height: 1.4em
    border: none
    outline none
    color inherit
    padding 12px 12px 12px 40px
    box-shadow inset 0 -2px 1px 0 rgba(0, 0, 0, .3)
    box-sizing border-box
  }
</style>
