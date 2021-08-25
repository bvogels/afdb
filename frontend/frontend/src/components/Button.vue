<template>
  <button @click="onClick()">Load Files</button>
  <button>Change Tags</button>
  <button>Play File</button>
  <button>Search</button>

</template>

<script>

export default {
  name: "Button",
  methods: {
     onClick() {
       this.$emit('load-data');
     }
  },
  emits: ['load-data']
}
</script>

<style scoped>
button {
  margin-right: 10px;
}


</style>