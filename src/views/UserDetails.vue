<template>
  <base-layout
    :page-title="loadedUser ? loadedUser.name : 'Loading...'"
    page-default-back-link="/tabs/users"
  >
    <h2 v-if="!loadedUser">Could not find a user for the given id.</h2>
    <UserRecord
      v-else
      :name="loadedUser.name"
      :firstname="loadedUser.firstname"
      :direction="loadedUser.direction"
      :image="loadedUser.image"
    />
  </base-layout>
</template>

<script>
import UserRecord from "../components/business/UserRecord.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserRecord,
  },
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
  computed: {
    loadedUser() {
      return this.user(this.userId);
    },
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>