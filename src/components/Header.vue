<script setup></script>
<template>
  <div>
    <nav>
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/async">async</NuxtLink>
      <NuxtLink to="/fetch">Fetch</NuxtLink>
      <NuxtLink to="/:id">id</NuxtLink>
      <NuxtLink to="/router">router</NuxtLink>
      <NuxtLink to="/tailwind">tailwind</NuxtLink>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
a {
  color: aqua;
  display: inline-block;
  font-size: 24px;
  padding: 20px 10px;
  text-decoration: none;
}
</style>
