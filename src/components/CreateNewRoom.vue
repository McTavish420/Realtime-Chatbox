<template>
<v-card
  class="mx-auto pa-10 my-10"
  width="600"
  outlined>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="add"
  >
    <p class="display-1 text-center cyan--text">Create New Room</p>
    <v-text-field
      v-model="name"
      prepend-icon="tag_faces"
      :counter="20"
      :rules="nameRules"
      label="Name of The Room"
      required
      class="my-5"
    ></v-text-field>

    <v-btn class="success accent-4" dark depressed type="submit">Create</v-btn>
  </v-form>
</v-card>
</template>

<script>
export default {
  name: 'AddTag',
  data () {
    return {
      name: '',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v.length >= 8 && v.length <= 20) || '6 to 15 Characters'
      ]
    }
  },
  methods: {
    async add () {
      let room = {
        roomName: this.name
      }
      // console.log(name)
      await this.$store.dispatch('newRoom', room)
    }
  }
}
</script>

<style>
</style>
