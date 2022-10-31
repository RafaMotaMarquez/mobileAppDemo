<template>
  <ion-list>
    <ion-item v-for="data in dataSource" :key="data.id">
      <ion-thumbnail slot="start">
        <ion-img :src="data.image" :alt="data.title"></ion-img>
      </ion-thumbnail>
      <ion-label>{{ data.name }}</ion-label>
      <ion-label>{{ data.firstname }}</ion-label>
      <ion-label>{{ data.direction }}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonItem, IonLabel, IonList, IonThumbnail, IonImg } from "@ionic/vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { IonItem, IonLabel, IonList, IonThumbnail, IonImg },
  computed: {
    ...mapGetters({
      dataSource: "userList",
    }),
  },
  methods: {
    ...mapActions({
      addUser: "addUser",
    }),
  },
};
</script>
<style>
</style>