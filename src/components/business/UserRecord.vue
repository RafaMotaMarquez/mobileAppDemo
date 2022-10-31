<template>
  <ion-img :src="image" :alt="name"></ion-img>
  <h2 class="ion-text-center">{{ name }}</h2>
  <h2 class="ion-text-center">{{ firstname }}</h2>
  <p class="ion-text-center">{{ direction }}</p>
</template>

<script>
import { IonImg } from "@ionic/vue";

export default {
  props: ["image", "name", "firstname", "direction"],
  components: {
    IonImg,
  },
};
</script>