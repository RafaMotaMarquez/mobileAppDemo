<template>
  <ion-page>
    <BaseLayout pageTitle="User reports">
      <DxPieChart
        id="pie"
        :data-source="dataSource"
        palette="Bright"
        title="Staff repartition"
        @point-click="pointClickHandler($event)"
        @legend-click="legendClickHandler($event)"
      >
        <DxSeries argument-field="direction" value-field="value">
          <DxLabel :visible="true">
            <DxConnector :visible="true" :width="1" />
          </DxLabel>
        </DxSeries>
        <DxSize :width="500" />
        <DxExport :enabled="true" />
      </DxPieChart>
    </BaseLayout>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import BaseLayout from "@/components/core/layouts/BaseLayout.vue";
import { mapGetters } from "vuex";

import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";

export default {
  components: {
    BaseLayout,
    IonPage,
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  data() {
    return {
      areas: [
        {
          country: "Russia",
          area: 12,
        },
        {
          country: "Canada",
          area: 7,
        },
        {
          country: "USA",
          area: 7,
        },
        {
          country: "China",
          area: 7,
        },
        {
          country: "Brazil",
          area: 6,
        },
        {
          country: "Australia",
          area: 5,
        },
        {
          country: "India",
          area: 2,
        },
        {
          country: "Others",
          area: 55,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      userList: "userList",
    }),
    dataSource() {
      return this.userList.map((item) => {
        return {
          // direction: this.userList.filter((item, index, arr) => arr.findIndex(e => e.id === item.id) === index),
          direction: [...new Set(this.userList.direction)],
          value: this.userList.filter((x) => x.direction == item.direction)
            .length,
        };
      });
    },
  },
  methods: {
    pointClickHandler(e) {
      this.toggleVisibility(e.target);
    },
    legendClickHandler(e) {
      const arg = e.target;
      const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
    },
    toggleVisibility(item) {
      item.isVisible() ? item.hide() : item.show();
    },
  },
};
</script>

<style>
#pie {
  height: 440px;
}

#pie * {
  margin: 0 auto;
}
</style>
