<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <DxChart :data-source="data">
        <DxArgumentAxis :tick-interval="10" />
        <DxSeries type="bar" />
        <DxLegend :visible="false" />
      </DxChart>
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
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

export default defineComponent({
  name: "Tab2Page",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
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
});
</script>
