<template>
  <div>
    <form data-test="todo-form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodoValue" type="text" placeholder="Add your todo:">
    </form>
      <div
          data-test="todo"
          v-for="todo in todos"
          :key="todo.id"
          id="todo"
          :class="['default', { completed: todo.completed }]"
          @click="todo.completed = !todo.completed"
      >
        {{ todo.text }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodoValue: '',
      todos: [
        {
          id: 1,
          text: 'Learn Vue testing',
          completed: false,
        }
      ]
    }
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos[this.todos.length - 1].id++,
        text: this.newTodoValue,
        completed: false,
      });
      this.newTodoValue = '';
    },
  }
}
</script>
<style>
  .default, .completed {
    margin-top: 10px;
    cursor: pointer;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
