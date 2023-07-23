<script setup lang="ts">
import Axios from "axios";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const queryString = location.search;
onMounted(() => {
  console.log("route", route.query);
  console.log();
});

async function callback() {
  let data = await Axios.get(
    `http://localhost:9000/login/oauth2/code/google${queryString}`,
    {
      withCredentials: true,
    }
  );
  localStorage.setItem("token", data.data.token1);

  console.log("Data", data);
}
</script>

<template>
  <div>
    <h2>CallBack 페이지</h2>
    <a :href="`http://localhost:9000/login/oauth2/code/google${queryString}`"
      >callback</a
    >
    <button @click="callback">callback</button>
  </div>
</template>
