<template>
  <ion-page>
    <BaseLayout pageTitle="UPU user list">
      <template v-slot:actions-end>
        <ion-button id="open-modal" expand="block">
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>
        <!-- <ion-button router-link="/users/add">
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button> -->
      </template>
      <ion-modal ref="modal" trigger="open-modal">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Welcome</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="save()">Save</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <UserForm />
        </ion-content>
      </ion-modal>
      <UserList />
    </BaseLayout>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonIcon, IonModal } from "@ionic/vue";
import UserList from "@/components/business/UserList.vue";
import BaseLayout from "@/components/core/layouts/BaseLayout.vue";
import UserForm from "@/components/business/UserForm.vue";

import { add } from "ionicons/icons";

export default {
  components: {
    BaseLayout,
    UserList,
    IonButton,
    IonIcon,
    IonPage,
    UserForm,
    IonModal,
  },
  data() {
    return { add };
  },
  methods: {
    cancel() {
      this.$refs.modal.$el.dismiss(null, "cancel");
    },
    save() {
      console.log("saving...");
      const name = this.$refs.input.$el.value;
      this.$refs.modal.$el.dismiss(name, "save");
    },
  },
};
</script>
