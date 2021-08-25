<template>
  <Header />
  <Controls @load-data="loadData()"/>
  <Table />
</template>

<script>
import Header from "./components/Header";
import Controls from "./components/Controls";
import Table from "./components/Table";
//import Display from "./components/Display";

export default {
  name: 'App',
  components: {
    Header, Controls, Table, //Display,
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
            console.log('works');

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
