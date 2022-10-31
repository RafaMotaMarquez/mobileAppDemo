<template>
  <ion-header mode="md">
    <ion-toolbar color="primary">
      <ion-img
        id="upuLogo"
        src="https://www.upu.int/Content/images/logo/logo-white.png"
        alt="UPU logo"
      ></ion-img>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonImg } from "@ionic/vue";
export default {
  components: {
    IonHeader,
    IonImg,
  },
};
</script>

<style>
#upuLogo {
  width: 130px !important;
  padding-left: 0.5rem;
}
</style>