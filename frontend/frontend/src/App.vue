<template>
  <Header />
  <Controls @load-data="loadData()"/>
  <Table :works="works" />
</template>

<script>
import Header from "./components/Header";
import Controls from "./components/Controls";
import Table from "./components/Table";
import Display from "./components/Display";

export default {
  name: 'App',
  components: {
    Header, Controls, Table, Display,
  },
  data() {
    return {
      works: []
    }
  },
  methods: {
    async loadData() {
      await fetch('http://localhost:8081/api/v1/audiofiles')
          .then(res => res.json())
          .then(resJson => {
            this.works = resJson;
          })
    }
  }
}
</script>

<style>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
</style>
