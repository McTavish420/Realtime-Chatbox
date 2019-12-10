<template>
  <v-container>
    <v-card
    class="mx-auto main-card"
    height="550px"
    color="teal accent-4"
    outlined
  >
    <v-list-item three-line dark v-if="room" >
      <v-list-item-content>
        <v-list-item-title class="font-weight-black room-font">{{room.roomName}}</v-list-item-title>
        <v-list-item-subtitle class="font-weight-black sub">Created By: {{room.admin.adminName}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <v-card
    class="mx-auto overflow-y"
    height="460px"
    outlined
    v-chat-scroll="{always: false, smooth: true}"
    >
     <v-container>
    <v-row :justify="message.from._id === userID ? 'end' : 'start'"
     class="mx-auto my-1"
      v-for="(message) in messages" :key="message._id"
      >
    <v-card
    :color="message.from._id === userID ? '#209cee' : '#3273dc'"
    outlined
    dark
    :class="message.from._id === userID ? 'my-1 txt-right' : 'my-1 txt-left'"
    max-width="800"
    >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle :class="message.from._id === userID ? 'sub font-weight-black text-end' : 'sub font-weight-black'">{{message.from.userName}}</v-list-item-subtitle>
        <v-list-item-title :class="message.from._id === userID ? 'text-wrap text-justify msg-title text-end' : 'text-wrap text-justify msg-title'">
          {{message.text}}
        </v-list-item-title>
        <v-list-item-subtitle :class="message.from._id === userID ? 'text-wrap text-justify clock text-end mt-1' : 'text-wrap text-justify clock my-1'">{{message.createdAt}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-card>
    </v-row>
  </v-container>
   </v-card>
  </v-card>
  <v-card
    class="mx-auto send"
    max-height="90px"
    outlined
  >
    <v-row>
      <v-col sm="10">
        <v-text-field
            v-model="text"
            prepend-icon="chat"
            label="Message"
            required
            class="mx-5"
          ></v-text-field>
      </v-col>
      <v-col sm="2">
        <v-btn text :disabled="!text" type="submit" @click.prevent="sendText" class="success accent-4 mt-5 mx-12">Send</v-btn>
      </v-col>
    </v-row>
  </v-card>
  </v-container>
</template>

<script>
import io from 'socket.io-client'
export default {
  data () {
    return {
      room: '',
      text: '',
      userID: '',
      messages: [],
      // socket: io('http://localhost:3000'),
      socket: io(),
      valid: true
    }
  },
  async created () {
    this.joinServer()
    // console.log('chatting route', await this.$route.params)
    this.room = await this.$store.dispatch('getRoom', this.$route.params.id)
    this.userID = localStorage.getItem('userID')
    this.messages = this.room.messages
  },
  methods: {
    async sendText () {
      let sender = {
        _id: localStorage.getItem('userID'),
        userName: localStorage.getItem('username'),
        userEmail: JSON.parse(localStorage.getItem('user')).email
      }
      let text = this.text
      let msg = {
        from: sender,
        text: text,
        roomID: this.room._id
      }
      await this.socket.emit('newMessage', msg)
      this.text = ''
    },
    joinServer () {
      this.socket.on('connect', () => {
        // console.log('connected to the server!!!')
        this.socket.on('newText', (data) => {
          // console.log(data)
          if (this.messages.length >= 30) {
            this.messages.shift()
            this.messages.push(data)
          } else {
            this.messages.push(data)
          }
        })
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster|Merriweather+Sans&display=swap');
.room-font {
  font-family: 'Lobster', cursive !important;
  font-size: 35px;
}
.overflow-y {
  overflow-y: auto !important;
  /* scroll-behavior: smooth; */
}
.txt-right {
  border-radius: 20px 0 20px 20px !important;
}
.txt-left {
  border-radius: 0 20px 20px 20px !important;
}
.sub {
  color: white;
  /* font-weight: 100 !important; */
  font-family: 'Merriweather Sans', sans-serif !important;
  font-size: 16px;
  margin-bottom: 5px;
}
.msg-title {
  color: white;
}
.clock {
  font-size: 12px;
}
.main-card {
  border-radius: 25px 25px 0 0 !important;
  border-style: solid !important;
}
.send {
  border-bottom: 1px solid #00BFA5 !important;
  border-left: 1px solid #00BFA5 !important;
  border-right: 1px solid #00BFA5 !important;
  border-radius: 0 0 25px 25px !important;
}
</style>
