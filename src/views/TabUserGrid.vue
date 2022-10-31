<template>
  <ion-page>
    <BaseLayout pageTitle="Advanced search">
      <template v-slot:actions-end>
        <ion-button router-link="/users/add">
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>
      </template>

      <DxDataGrid
        :data-source="dataSource"
        :allow-column-reordering="true"
        :row-alternation-enabled="true"
      >
        <DxFilterRow :visible="true" />
        <DxGroupPanel :visible="true" />
        <DxGrouping :auto-expand-all="true" />
        <DxColumn data-field="name" data-type="string" />
        <DxColumn data-field="firstname" data-type="string" />
        <DxColumn data-field="direction" data-type="string" :group-index="0" />
      </DxDataGrid>
    </BaseLayout>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonIcon } from "@ionic/vue";
import BaseLayout from "@/components/core/layouts/BaseLayout.vue";
import { add } from "ionicons/icons";
import { mapGetters } from "vuex";

import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxFilterRow,
} from "devextreme-vue/data-grid";

export default {
  components: {
    BaseLayout,
    IonPage,
    IonButton,
    IonIcon,
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxFilterRow,
  },
  data() {
    return { add };
  },
  computed: {
    ...mapGetters({
      dataSource: "userList",
    }),
  },
};
</script>
<style>
</style>