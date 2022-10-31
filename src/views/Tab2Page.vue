<template>
  <ion-page>
    <core-header />
    <ion-content :fullscreen="true">
      <ion-toolbar class="ion-margin-bottom">
        <ion-title size="default" class="ion-text-uppercase"
          >Advanced data search</ion-title
        >
      </ion-toolbar>
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
import CoreHeader from "@/components/core/CoreHeader.vue";

import { IonPage, IonToolbar, IonTitle, IonContent } from "@ionic/vue";
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

export default {
  name: "Tab2Page",
  components: {
    CoreHeader,
    ExploreContainer,
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
};
</script>
