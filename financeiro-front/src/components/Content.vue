<script setup lang="ts"></script>

<template>
  <main class="ct-container">
    <slot></slot>
  </main>
</template>

<style scoped>
.ct-container {
  grid-area: CT;
  background-color: darkred;
}
</style>
