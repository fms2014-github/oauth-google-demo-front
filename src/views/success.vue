<script setup lang="ts">
import { onMounted } from "vue";
import axios from "axios";

onMounted(async () => {
  let data = await axios.get("http://localhost:9000/token-issue", {
    withCredentials: true,
    headers: {
      Authorization:
        "Beare ya29.a0AbVbY6NgwSHg_2QG_ruo8rZ5-s3axE5M91huQavzTRU9MI93Innt-8yjh32YsYiKwEefkg2HvQkUBgGvR2wPVD4SN5TSYiLaxjLZvz-sP-97p-as9fKpqB9vDpPSLrpYljTa3pIpLAMHX5_NCcRVJdHUy8hqaCgYKAa4SARMSFQFWKvPlFXDYPOKjIemWVGlhQ28pSg0163",
    },
  });

  console.log(data);
});
</script>
<template>
  <div>
    <h1>Success!!</h1>
  </div>
</template>
