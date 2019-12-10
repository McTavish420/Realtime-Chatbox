<template>
  <nav>
    <v-app-bar
      color="indigo accent-4"
      dark
    >
      <v-toolbar-title class="chatbox">
          Chatbox
    </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text link :to="{name: 'home'}">
            <v-icon class="mx-2">mdi-home</v-icon>
            Home
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text link :to="{name: 'admin'}" v-if="auth && isAdmin">
            <v-icon class="mx-2">settings_applications</v-icon>
            Admin Panel
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text link to="/login" v-if="!auth">
           <v-icon class="mx-2">person</v-icon>
           Sign In
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text link to="/registration" v-if="!auth">
           <v-icon class="mx-2">person_add</v-icon>
           Sign Up
        </v-btn>
      </v-toolbar-items>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }" v-if="auth">
          <v-btn text v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            {{username}}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            link :to="{name: 'myaccount'}"
          >
            <v-list-item-title>My Account</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="logout"
          >
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      username: this.$store.getters.getUserName
    }
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    },
    isAdmin () {
      return this.$store.getters.getRole === 'admin'
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
.chatbox {
  font-family: 'Pacifico', cursive !important;
  font-size: 35px;
}
</style>
