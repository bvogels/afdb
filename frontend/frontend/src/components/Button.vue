<template>
  <label for="selection">Search for: </label>
  <input v-model="searchTerm" id="selection" type="text" />
  <button type="submit" @click="$emit('search-term', searchTerm)" title="Load">Search</button>
  <button>Change Tags</button>
  <button>Play File</button>
  <button>Search</button>

</template>

<script>

export default {
  name: "Button",
  data() {
    return {
      searchTerm: ''
    }
  },
  emits: ['search-term']
}
</script>

<style scoped>
button, input {
  margin-right: 10px;
}



</style>