<template>
  <v-container fluid class='home'>
    <v-row>
      <v-col md="2">
        <v-expansion-panels>
          <v-expansion-panel class="shadow-0 my-2" v-if="onRoom">
          <v-expansion-panel-header>{{onRoom.roomName}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn depressed dark
             class="mb-2 blue darken-1 w-100"
             :to="{name: 'chat', params: {id: onRoom._id, roomName: onRoom.roomName}}">Go to Room</v-btn>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <v-btn depressed dark
              v-if="onRoom.admin.adminID === userID"
              @click="remove(onRoom._id)"
              class="mb-2 blue darken-1 w-100">Delete Room</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel class="shadow-0 my-2" v-show="username">
          <v-expansion-panel-header>Chat Rooms</v-expansion-panel-header>
          <v-expansion-panel-content v-for="(room, index) in rooms" :key="index">
            <v-btn depressed dark
             class="mb-2 blue darken-1 w-100"
             :to="{name: 'chat', params: {id: room._id, roomName: room.roomName}}"
             @click="goRoom(room)">{{room.roomName}}</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="shadow-0 my-2" v-show="username">
          <v-expansion-panel-header>My Rooms</v-expansion-panel-header>
          <v-expansion-panel-content v-for="(room, index) in myRooms" :key="index">
            <v-btn depressed dark
             class="mb-2 blue darken-1 w-100"
             link :to="{name: 'chat', params: {id: room._id, roomName: room.roomName}}"
             @click.stop="goRoom(room)">{{room.roomName}}</v-btn>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <v-btn depressed dark
             :to="{name: 'createRoom'}"
             class="mb-2 blue darken-1 w-100">New Room</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="shadow-0 my-2" v-show="username">
          <v-expansion-panel-header>{{username}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn depressed dark class="mb-2 blue darken-1 w-100"
             link :to="{name: 'myaccount'}">My Account</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col md="10" class="home">
      <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      username: null,
      rooms: [],
      onRoom: null,
      userID: '',
      myRooms: []
    }
  },
  async created () {
    let name = this.$store.getters.getUserName
    if (name !== null) {
      this.username = name
    } else {
      this.username = ''
    }
    this.userID = this.$store.getters.getUserID
    this.rooms = await this.$store.dispatch('getAllRooms')
    this.rooms.forEach(element => {
      // console.log(element.admin.adminID)
      if (element.admin.adminID === this.userID) {
        this.myRooms.push(element)
      }
    })
    // console.log('home route', this.$route)
    if (this.$route.params.id) {
      this.onRoom = await this.$store.dispatch('getRoom', this.$route.params.id)
    }
    // console.log('this room', this.onRoom)
    // console.log(this.myRooms)
    // console.log(this.rooms)
  },
  methods: {
    async goRoom (room) {
      // console.log('on this room', room)
      this.$router.go()
      this.onRoom = room
      // let id = room._id
      // console.log('inside component', await this.$store.dispatch('getRoom', id))
    },
    async remove (id) {
      await this.$store.dispatch('removeRoom', id)
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 0px !important;
}
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
