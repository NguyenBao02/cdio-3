<template>
  <div class="card">
    <div class="card-body">
      <div class="chart-container1">
        <div
          class="chartjs-size-monitor"
          style="
            position: absolute;
            inset: 0px;
            overflow: hidden;
            pointer-events: none;
            visibility: hidden;
            z-index: -1;
          "
        >
          <div
            class="chartjs-size-monitor-expand"
            style="
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              overflow: hidden;
              pointer-events: none;
              visibility: hidden;
              z-index: -1;
            "
          >
            <div
              style="
                position: absolute;
                width: 1000000px;
                height: 1000000px;
                left: 0;
                top: 0;
              "
            ></div>
          </div>
          <div
            class="chartjs-size-monitor-shrink"
            style="
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              overflow: hidden;
              pointer-events: none;
              visibility: hidden;
              z-index: -1;
            "
          >
            <div
              style="
                position: absolute;
                width: 200%;
                height: 200%;
                left: 0;
                top: 0;
              "
            ></div>
          </div>
        </div>
        <canvas
          id="chart2"
          width="1181"
          height="425"
          style="display: block; height: 340px; width: 945px"
          class="chartjs-render-monitor"
        ></canvas>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
