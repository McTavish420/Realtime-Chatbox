<template>
<v-container fluid>
  <v-row>
    <v-col md="2">
      <v-expansion-panels class="my-2">
        <v-expansion-panel class="shadow-0 my-2">
          <v-expansion-panel-header>Chat Rooms</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn depressed dark class="mb-2 blue darken-1 w-100" link :to="{name: 'allrooms'}">View All</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="shadow-0 my-2">
          <v-expansion-panel-header>Users</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn depressed dark class="mb-2 blue darken-1 w-100" link :to="{name: 'allusers'}">View All</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col md="10">
      <router-view />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'admin'
}
</script>

<style>
.w-100 {
  width: 100%
}
.v-expansion-panel::before {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0), 0px 0px 0px 0px rgba(0, 0, 0, 0.0), 0px 0px 0px 0px rgba(0, 0, 0, 0.0) !important;
}
.v-expansion-panel {
  border: 1px solid rgba(75, 75, 75, 0.3) !important
}
</style>
