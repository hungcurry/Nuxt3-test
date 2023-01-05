<script setup>
import axios from 'axios';
// node 打API useFetch
const { data, pending, error, refresh } = await useFetch(
  'https://www.mocky.io/v2/5cc3f5723400005d00765480',
);
console.log('node', data);
const ary = ref([]);
// 這邊要小心回傳的資料格式是 RefImpl 因此 要多加層value
ary.value = data.value.twzip.city;

// client 打API
const resAry = ref([]);
const FetchInit = async url => {
  try {
    const res = await axios.get(url);
    console.log(`axios`, res);
    resAry.value = res.data.twzip.city;
  } catch (error) {
    console.log('catch', error.message);
  }
};
onMounted(() => {
  FetchInit('https://www.mocky.io/v2/5cc3f5723400005d00765480');
});
</script>
<template>
  <div>
    <h2>fetch</h2>

    <p class="muted">node 打API</p>
    <ul v-for="item in ary" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
    <br />
    <p class="muted">client 打API</p>
    <ul v-for="item in resAry" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.muted {
  color: rgb(153, 255, 0);
}
</style>
