<template>
  <ion-page>
    <ion-tabs mode="md">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="users" href="/tabs/users">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Users</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="grid" href="/tabs/grid">
          <ion-icon :icon="listCircleOutline" />
          <ion-label>User search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="report" href="/tabs/report">
          <ion-icon :icon="statsChartOutline" />
          <ion-label>Report</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  peopleOutline,
  listCircleOutline,
  statsChartOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      peopleOutline,
      listCircleOutline,
      statsChartOutline,
    };
  },
});
</script>
