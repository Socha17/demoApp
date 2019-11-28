<template>
  <div id="app">
    <Services v-if="userLoggedIn" :name="name"/>
    <modal name="login" width="85%" height="auto" :clickToClose="false">
      <Login/>
    </modal>
  </div>
</template>

<script>
import Services from './Services.vue'
import Login from './Login.vue'

export default {
  name: 'app',
  components: {
    Services,
    Login,
  },
  data() {
    return {
      userLoggedIn: false,
      name: null,
    }
  },
  mounted() {
    this.$modal.show('login');
  },
  methods: {
    login(name) {
      this.name = name
      this.userLoggedIn = true;
      this.$modal.hide('login');
      this.$noty.success("You have Logged In!")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  border-radius: 6px;
  color: white;
  width: 100px;
  height: 30px;
  background-color: #1cc91c;
  text-align: center;
  margin-top: 20px;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
