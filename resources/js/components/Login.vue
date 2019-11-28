<template>
  <div style="padding: 20px; margin: auto; width: 200px">
    Enter Your Name <br/>
    <input class="textInput" type="text" v-model="name"><br>
    <input type="submit" value="Submit" v-on:click="emitLogin()">
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {  },
  data() {
    return {
      name: ''
    }
  },
  mounted() {
  },
  methods: {
    emitLogin() {
      if (this.name === '') {
        this.$noty.error("Oops, Please Enter A Name")
        return
      }
      this.$parent.$parent.login(this.name)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
