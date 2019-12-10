<template>
<v-simple-table fixed-header height="650">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"><h1>#</h1></th>
          <th class="text-left"><h1>Room Name</h1></th>
          <th class="text-left"><h1>Room Admin</h1></th>
          <th class="text-left"><h1>Admin Email</h1></th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rooms" :key="index">
          <td><h3>{{ index + 1 }}</h3></td>
          <td><h3>{{ item.roomName }}</h3></td>
          <td><h3>{{item.admin.adminName}}</h3></td>
          <td><h3>{{item.admin.adminEmail}}</h3></td>
          <td>
            <v-btn text class="error darken-1" @click="delC(item._id)">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
</v-simple-table>
</template>

<script>
export default {
  data () {
    return {
      rooms: [],
      error: ''
    }
  },
  async created () {
    try {
      // console.log(this.$route.path)
      // console.log(this.$store.dispatch('getAllRooms'))
      this.rooms = await this.$store.dispatch('getAllRooms')
      // console.log(this.rooms)
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    delC (id) {
      // console.log(id)
      this.$store.dispatch('removeRoom', id)
    }
  }
}
</script>

<style>
</style>
