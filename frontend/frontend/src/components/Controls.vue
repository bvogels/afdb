<template>
  <div id="outer">
      <div id="controllable">
        <Button @load-data="queryTag"/>

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
    queryTag(tag) {
      console.log(tag)
     this.$emit('load-data', tag)
    }
  }
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