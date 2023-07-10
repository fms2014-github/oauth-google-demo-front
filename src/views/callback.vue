<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const queryString = location.search;
onMounted(() => {
  console.log("route", route.query);
  console.log();
});
</script>

<template>
  <div>
    <h2>CallBack 페이지</h2>
    <a :href="`http://localhost:9000/login/oauth2/code/google${queryString}`"
      >callback</a
    >
  </div>
</template>
