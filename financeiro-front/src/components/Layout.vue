<script setup lang="ts">
import { ref } from "vue";
import { mdiArrowExpandLeft, mdiArrowExpandRight, mdiAccount } from "@mdi/js";
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  RadarController,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadarController,
  CategoryScale,
  LinearScale,
  ArcElement
);
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
    chartData: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
    chartOptions: {
      responsive: false,
    },
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
      <div class="dashboard-div">
        <h1>Dashboard</h1>
        <div :style="{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'wrap'
        }">
          <v-card title="Financias Gustavo" width="fit-content">
            <Doughnut
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
              :style="{
                width: '435px',
                height: '435px',
              }"
          /></v-card>
          <v-card title="Financias Luisa" width="fit-content">
            <Doughnut
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
              :style="{
                width: '435px',
                height: '435px',
              }"
          /></v-card>
          <v-card title="Financias Concilia" width="fit-content">
            <Doughnut
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
              :style="{
                width: '435px',
                height: '435px',
              }"
          /></v-card>
          <v-card title="Financias Casa" width="fit-content">
            <Doughnut
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
              :style="{
                width: '435px',
                height: '435px',
              }"
          /></v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.dashboard-div {

  padding: 20px 50px;

  h1 {
    margin-bottom: 30px;
  }
}
</style>
