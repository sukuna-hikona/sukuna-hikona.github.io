<template>
  <nav class="nav">
    <div class="nav__inner">
      <router-link to="/" class="nav__logo">
        <span>&gt;</span> portfolio
      </router-link>
      <ul class="nav__links" :class="{ open: menuOpen }" @click="menuOpen = false">
        <li><router-link to="/#about">About</router-link></li>
        <li><router-link to="/#skills">Skills</router-link></li>
        <li><router-link to="/#projects">Projects</router-link></li>
        <li>
          <a href="https://github.com/sukuna-hikona" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>
      </ul>
      <div class="nav__hamburger" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>
