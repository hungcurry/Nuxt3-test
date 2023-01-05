<template>
  <div class="about">
    <nav>
      <NuxtLink to="/router/guide">Guide</NuxtLink>
      <NuxtLink to="/router/reference">API Reference</NuxtLink>
      <NuxtLink to="/router/changelog">Changelog </NuxtLink>
      <NuxtLink to="/router/gitHub">GitHub</NuxtLink>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      color: #2c3e50;
      display: inline-block;
      font-weight: bold;
      margin: 0 10px;
      padding: 10px;

      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>
