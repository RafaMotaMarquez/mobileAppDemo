<template>
  <ion-page>
    <BaseLayout pageTitle="UPU user list">
      <template v-slot:actions-end>
        <ion-button router-link="/users/add">
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>
      </template>
      <UserList />
    </BaseLayout>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonIcon } from "@ionic/vue";
import UserList from "@/components/business/UserList.vue";
import BaseLayout from "@/components/core/layouts/BaseLayout.vue";

import { add } from "ionicons/icons";

export default {
  name: "TabUserList",
  components: {
    BaseLayout,
    UserList,
    IonButton,
    IonIcon,
    IonPage,
  },
  data() {
    return { add };
  },
  methods: {},
};
</script>
