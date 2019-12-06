<template>
  <div class="helper">
    <span class='left'>{{ unFinishedLength }} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class= "['state', selectedState === state ? 'active' : '']"
        @click="toggleState(state)"
      >
        {{ state }}
      </span>
    </span>
    <span class='clear' @click="deleteAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
  export default {
    props: {
      selectedState: {
        type: String,
        required: true
      },
      todos: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        states: ['all', 'active', 'completed']
      }
    },
    computed: {
      unFinishedLength() {
        return this.todos.filter(todo => !todo.completed).length;
      }
    },
    methods: {
      toggleState(state) {
        this.$emit("toggle", state);
      },
      deleteAllCompleted() {
        this.$emit('delAllCompleted');
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .helper {
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 24px
    background-color #fff
    font-size 14px
  }
  .left, .clear, .tabs {
    padding 0 10px
    box-sizing border-box
  }
  .left, .clear {
    width 150px
  }
  .left {
    text-align left
  }
  .clear {
    text-align right
    cursor pointer
  }

  .tabs {
    width 200px
    display flex
    justify-content space-between
    * {
      display inline-block
      padding 0 10px
      cursor pointer
      border 1px solid rgba(175, 47, 47, 0)
      &.active {
        border-color rgba(175, 47, 47, 0.4)
        border-radius 5px
      }
    }
  }
</style>