<template>
  <table>
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Title</th>
      <th>Composer (First name)</th>
      <th>Composer (Last name</th>
      <th>Artist</th>
      <th>Length</th>
      <th>Path</th>
      <th>MacOS Tags</th>
    </tr>
    <tr>
      <td>g</td>
    </tr>
  </table>
  <div>{{ works }}</div>
</template>

<script>
export default {
  name: "Table",
  props: ['works']
}
</script>

<style scoped>

</style>