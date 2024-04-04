<script setup lang="ts">
import { ref } from "vue";
import { mdiArrowExpandLeft, mdiArrowExpandRight, mdiAccount } from "@mdi/js";

const drawer = ref(true);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<script lang="ts">
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Meu perfil" },
      { title: "Configurações" },
      { title: "Sair" },
    ],
  }),
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer">
        <v-icon :icon="drawer ? mdiArrowExpandLeft : mdiArrowExpandRight" />
      </v-app-bar-nav-icon>

      <v-app-bar-title> FinanceiroApp </v-app-bar-title>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn :icon="mdiAccount" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>
