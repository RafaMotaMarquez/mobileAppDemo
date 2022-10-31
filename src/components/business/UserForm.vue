<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="user.imageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input v-model="user.name" type="text" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Firstname</ion-label>
        <ion-input v-model="user.firstname" type="text" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Direction</ion-label>
        <ion-input v-model="user.direction" type="text" required></ion-input>
      </ion-item>
    </ion-list>
    <ion-button mode="md" type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

const { Camera } = Plugins;

export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      user: {
        name: "",
        firstname: "",
        direction: "",
        imageUrl: null,
      },
      camera,
    };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
      });

      this.user.imageUrl = photo.webPath;
    },
    submitForm() {
      const payload = {
        name: this.user.name,
        firstname: this.user.firstname,
        direction: this.user.direction,
        imageUrl: this.user.imageUrl,
      };
      this.$emit("save", payload);
    },
  },
};
</script>