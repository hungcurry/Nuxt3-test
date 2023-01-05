<script setup>
// nuxt3 不需要 會自動引入
// import { useRoute , useRouter} from 'vue-router';
const router = useRouter();
const route = useRoute();
const path = route.path;
const id = route.params.id;
</script>
<template>
  <div>
    <h1>動態網址</h1>
    <p>
      統ㄧ就使用 useRoute()取得 不需要像Nuxt2 還分啥asyncData／Vue取得 Nuxt2方式
    </p>
    <p>
      Vue3 => <span class="tags">{{ path }}</span>
    </p>
    <p>
      Vue3 => <span class="tags">{{ id }}</span>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.tags {
  color: red;
}
</style>
