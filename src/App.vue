<template>
  <div
    class="w-full max-w-screen-xl px-5 sm:px-10 text-white [text-shadow:0px_0px_5px_black] font-orbitron flex flex-col items-center"
  >
    <NavBar />
    <main class="w-full max-w-screen-lg">
      <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<style>
.route-enter-active,
.route-leave-active {
  transition: all 500ms;
}
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}

body {
  width: 100vw;
  overflow-x: hidden;
  background-color: black;
  background-image: url("./assets/background.jpg");
  background-size: max(100vw, 100vh);
  background-position: 0 50%;
  background-attachment: fixed;
  -webkit-tap-highlight-color: transparent;
}
#app {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
</style>
