<template>
  <div class="todo-list">
    <role v-for="(role, index) in roleLists" :key="index" :role.sync="role"></role>
  </div>
</template>

<script>
import Role from './Role.vue'
export default {
  props: ['roleLists'],
  components: {
    Role
  }
}
</script>
<style scoped="scoped">
.todo-list{
  border-left: 1px solid #ddd !important;
}
</style>

