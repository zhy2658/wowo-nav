<template>
  <Navbar :menu="menu" />
  <div class="test">asdasdas</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/NavBar.vue'

const menu = ref([
  {
    path: '/',
    label: '主页'
  },
  {
    path: '/account/list',
    label: '账户'
  }
])
</script>

<style scoped>
.test {
  height: 1000px;
  background-color: pink;
}
</style>
