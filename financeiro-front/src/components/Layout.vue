<script setup lang="ts">
import MainHeader from "./MainHeader.vue";
import Aside from "./Aside.vue";
import Content from "./Content.vue";

</script>

<template #default>
  <div class="layout-grid">
    <MainHeader />
    <Aside />
    <Content>
       <slots></slots>
    </Content>
  </div>
</template>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
      "MH"
      "CT";

    height: 100vh;
  }
}
</style>
