<script setup>
// node 打API useAsyncData
const { data, pending, error, refresh } = await useAsyncData('fetch', () =>
  $fetch('https://www.mocky.io/v2/5cc3f5723400005d00765480'),
);
console.log('node', data);
const ary = ref([]);
// 這邊要小心回傳的資料格式是 RefImpl 因此 要多加層value
ary.value = data.value.twzip.city;
</script>
<template>
  <div>
    <h2>AsyncData</h2>
    <p class="muted">AsyncData 打API</p>
    <ul v-for="item in ary" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.muted {
  color: rgb(153, 255, 0);
}
</style>
