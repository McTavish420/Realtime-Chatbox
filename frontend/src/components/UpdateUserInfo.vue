<template>
  <v-container>
    <v-card
  class="mx-auto pa-10 my-10"
  width="600"
  outlined>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="update"
  >
    <p class="display-1 text-center cyan--text">SIGN UP</p>
    <v-text-field
      v-model="userinfo.username"
      prepend-icon="mdi-account-circle"
      :counter="20"
      :rules="nameRules"
      label="Username"
      required
      class="my-5"
    ></v-text-field>
    <v-btn class="success accent-4" dark depressed type="submit">Update</v-btn>
  </v-form>
  </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {},
      valid: true,
      nameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 20) || 'Username must be less than 10 characters'
      ]
    }
  },
  async created () {
    let id = JSON.parse(localStorage.getItem('user'))._id
    this.userinfo = await this.$store.dispatch('getAUser', id)
    // console.log(this.userinfo)
  },
  methods: {
    update () {
      let user = {
        _id: this.userinfo._id,
        username: this.userinfo.username,
        email: this.userinfo.email,
        role: this.userinfo.role
      }
      this.$store.dispatch('changeUser', user)
    }
  }
}
</script>

<style>
</style>
