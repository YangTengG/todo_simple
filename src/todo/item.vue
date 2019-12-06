<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input v-model="todo.completed" class="toggle" type="checkbox" />
    <span class="label">{{ todo.content }}</span>
    <button class="destory" @click="deleteItem"></button>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        
      }
    },
    methods: {
      deleteItem() {
        this.$emit('delItem', this.todo.id);
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .todo-item {
    position relative
    background-color #fff
    font-size 18px
    height 40px
    line-height 40px
    border-bottom 1px solid rgba(0, 0, 0, .06)
    .label {
      display block
      white-space: pre-line
      word-break: break-all
      margin: 0 45px
      transition color 0.4s
    }
    
    &.completed {
      .label {
        color #d9d9d9
        text-decoration line-through
      }  
    }
    .toggle {
      text-align center
      width 40px
      margin 0
      position absolute
      top 0
      bottom 0
      border none
      outline none
      appearance none
      &:after {
        content ' '
        background-image url('../assets/images/unChecked.svg')
        background-size 24px
        background-position center
        background-repeat: no-repeat;
        display: block;
        width: 100%;
        height: 100%;
      }
      &:checked:after {
        content ' '
        background-image url('../assets/images/checked.svg')
        background-size 24px
        background-position center
        background-repeat: no-repeat;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .destory {
      width 40px
      position absolute
      top 0
      bottom 0
      right 10px
      font-size 20px
      color #cc9a9a
      transition color 0.2 ease-out
      background-color transparent
      appearance none
      border-width 0
      cursor pointer
      outline none
    }
    &:hover {
      .destory:after {
        content: 'x'
      }
    }
  }
</style>
