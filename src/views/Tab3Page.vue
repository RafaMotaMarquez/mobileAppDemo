<template>
  <ion-page>
    <BaseLayout pageTitle="User reports">
      <DxChart :data-source="data">
        <DxArgumentAxis :tick-interval="10" />
        <DxSeries type="bar" />
        <DxLegend :visible="false" />
      </DxChart>
    </BaseLayout>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import BaseLayout from "@/components/core/layouts/BaseLayout.vue";

import DxChart, {
  DxArgumentAxis,
  DxSeries,
  DxLegend,
} from "devextreme-vue/chart";

const data = [
  {
    arg: 1990,
    val: 5320816667,
  },
  {
    arg: 2000,
    val: 6127700428,
  },
  {
    arg: 2010,
    val: 6916183482,
  },
];

export default {
  name: "Tab3Page",
  components: {
    BaseLayout,
    IonPage,
    DxChart,
    DxArgumentAxis,
    DxSeries,
    DxLegend,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
<style>
</style>
