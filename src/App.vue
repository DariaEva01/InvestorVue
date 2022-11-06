<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <div class="relative top-30">
    <RouterView />
    <TheFooter />
  </div>
</template>

<style scoped></style>
