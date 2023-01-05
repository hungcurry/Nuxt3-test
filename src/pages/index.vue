<script setup>
import Card from '@/components/Card';
const num = ref(0);
onMounted(() => {
  setInterval(() => {
    num.value++;
  }, 1000);
});
</script>
<template>
  <div>
    <h1>首頁</h1>
    <p>{{ num }}</p>
    <br />
    <h4>components 自動引入</h4>
    <Card />
  </div>
</template>
<style lang="scss" scoped>
h4 {
  color: aqua;
  font-size: 32px;
}
</style>
