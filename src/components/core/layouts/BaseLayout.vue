<template>
  <core-header />
  <ion-header>
    <ion-toolbar class="ion-margin-bottom">
      <ion-buttons slot="start">
        <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
      </ion-buttons>
      <ion-title size="default" class="ion-text-uppercase">{{
        pageTitle
      }}</ion-title>
      <ion-buttons slot="end">
        <slot name="actions-end"></slot>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <slot />
  </ion-content>
</template>

<script>
import {
  // IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  // IonToolbar, IonTitle, IonContent
} from "@ionic/vue";
import CoreHeader from "@/components/core/CoreHeader.vue";

export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    // IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    CoreHeader,

    // IonToolbar,
    // IonTitle,
    // IonContent,
  },
};
</script>