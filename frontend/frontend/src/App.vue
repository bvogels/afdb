<template>
  <Header />
  <Controls />
  <Table />
</template>

<script>
import Header from "./components/Header";
import Controls from "./components/Controls";
import Table from "./components/Table";

export default {
  name: 'App',
  components: {
    Header, Controls, Table
  },
}
</script>

<style>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
</style>
