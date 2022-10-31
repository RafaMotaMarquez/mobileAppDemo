<template>
  <base-layout page-title="Add a User" page-default-back-link="/tabs/users">
    <UserForm @save="saveUser" />
  </base-layout>
</template>

<script>
import UserForm from "../components/business/UserForm.vue";
export default {
  components: {
    UserForm,
  },
  methods: {
    saveUser(payload) {
      console.log("Inside?");
      this.$store.dispatch("addUser", payload);
      this.$router.push("/tabs/users");
      //   this.$router.replace("tabs/users");
    },
  },
};
</script>