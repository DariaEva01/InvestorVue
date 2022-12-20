<template>
  <header class="bg-black fixed z-10 w-full">
    <nav class="flex items-center p-2 px-4">
      <div class="mr-10 grow">
        <img src="@/assets/img/Logo.png" alt="logo" />
      </div>
      <ul class="text-primary-light list-none flex justify-between">
        <router-link
          :to="'/first-page'"
          class="no-underline menu-link text-primary-light cursor-pointer duration-700 ease-in-out hover:text-primary-dark"
        >
          <li class="mr-6 cursor-pointer">О программе</li>
        </router-link>

        <li class="mr-6">
          <a
            class="cursor-pointer no-underline duration-700 ease-in-out hover:text-primary-dark"
          >
            Новости
          </a>
        </li>
        <li class="mr-6">
          <a
            class="text-primary-light cursor-pointer no-underline duration-700 ease-in-out hover:text-primary-dark"
          >
            Загрузить
          </a>
        </li>
        <router-link
          :to="'/'"
          class="no-underline menu-link text-primary-light cursor-pointer duration-700 ease-in-out hover:text-primary-dark"
        >
          <li class="mr-6 cursor-pointer">О нас</li>
        </router-link>
        <li class="mr-6">
          <a
            class="cursor-pointer duration-700 ease-in-out hover:text-primary-dark"
          >
            Поддержка
          </a>
        </li>
        <li class="mr-6">
          <a
            class="cursor-pointer duration-700 ease-in-out hover:text-primary-dark"
          >
            Войти
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.menu-link {
  text-decoration: none;
}
.menu-link.router-link-active {
  text-decoration: underline;
}
</style>
