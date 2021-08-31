<template>
  <table class="works">
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Title</th>
      <th>Composer (First name)</th>
      <th>Composer (Last name)</th>
      <th>Artist</th>
      <th>Length</th>
      <th>Path</th>
      <th id="macostags">MacOS Tags</th>
    </tr>
    <Display :works="works" />
  </table>
</template>

<script>
import Display from "./Display";

export default {
  name: "Table",
  components: {
    Display
  },
  props: ['works']
}
</script>

<style scoped>
.works {
  width: 100%;
  border-collapse: collapse;
  border-width: thin;
  table-layout: fixed;

}

tr, th {
  border: 1px;
  text-align: left;
  overflow: hidden;
}
#firstrow {
  position: fixed;
  padding-bottom: 10px;
}


</style>