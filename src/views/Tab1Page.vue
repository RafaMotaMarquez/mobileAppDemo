<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">UPU user list</ion-title>
        </ion-toolbar>
      </ion-header>
      <UserList name="Tab 1 page" />
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
import UserList from "@/components/business/UserList.vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    UserList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  methods: {},
});
</script>
