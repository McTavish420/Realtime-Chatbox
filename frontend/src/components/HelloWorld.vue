<template>
  <v-container>
    <template>
  <v-card
    class="mx-auto box"
    max-width="800"
    outlined
  >
    <v-layout justify-center>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center head-title">Welcome to Chatbox</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-layout>
      <v-layout justify-center v-show="username">
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center name-title">{{username}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout>
    <v-layout justify-center>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center text-title">Start Chatting</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout>
    <v-layout justify-center v-show="username">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center text-title">Create your own Chat Room or Join any</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout>
    <v-layout justify-center v-show="!username">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center text-title">
            <v-btn text :to="{name: 'login'}" class="info accent-4 text-title mx-2">
              Sign In
            </v-btn>
            <v-btn text :to="{name: 'registration'}" class="info accent-4 text-title mx-2">
              Sign Up
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout>
  </v-card>
</template>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      username: null
    }
  },
  created () {
    let name = this.$store.getters.getUserName
    if (name !== null) {
      this.username = name
    } else {
      this.username = ''
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Barlow|Merriweather&display=swap');
.head-title {
  font-family: 'Merriweather', serif;
  font-weight: 100 !important;
  font-size: 40px;
}
.name-title {
  font-family: 'Anton', sans-serif;
  font-weight: 100 !important;
  font-size: 32px;
}
.text-title {
  font-family: 'Barlow', sans-serif;
  font-weight: 100 !important;
  font-size: 24px;
}
.box {
  border: 3px solid #8C9EFF !important;
  border-radius: 25px !important;
}
</style>
