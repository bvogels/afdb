<template>
  <div id="outer">
      <div id="controllable">
        <Button @search-term="selection"/>
      </div>
  </div>

</template>

<script>
import Button from "./Button";

export default {
  name: "Controls",
  components: {
    Button
  },
  methods: {
    selection(sel) {
      this.$emit('search-term', sel)
    }
  }

  // emits: ['search-term']
}


</script>

<style scoped>
#outer {
  border-style: solid;
  border-radius: 15px;
}

#controllable {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

</style>