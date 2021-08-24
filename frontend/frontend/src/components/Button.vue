<template>
  <button @click="onClick()">Load Files</button>
</template>

<script>
export default {
  name: "Button",
  props: {},
  methods: {
    onClick() {
      console.log('Button clicked');
    }
  }
}
</script>

<style scoped>

</style>