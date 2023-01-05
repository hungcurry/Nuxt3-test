<script setup>
import { useAddCount } from '@/composables/useAddCount.js';
import CardPhotoItem from './PhotoItem.vue';
const { num, addCount } = useAddCount();
</script>
<template>
  <div>
    <div class="card">
      <p>Card</p>
      <CardPhotoItem />
      <br />
      <h4 class="muted">composables 引入</h4>
      <p>{{ num }}</p>
      <button @click="addCount">增加</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  background-color: brown;
  height: 500px;
  width: 500px;
}

h4 {
  color: aqua;
  font-size: 32px;
}

p {
  font-size: 24px;
}

.muted {
  color: rgb(153, 255, 0);
}
</style>
