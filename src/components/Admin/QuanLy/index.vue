<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Điện Thoại", "Laptop", "Màn Hình"],
        datasets: [
          { data: [40, 20, 12], backgroundColor: ["red", "blue", "yellow"] },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
<style></style>
