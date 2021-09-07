<template>
  <Header />
  <Controls @load-data="loadData"/>
  <Table :works="works" />
  <Footer @focus="focusTags" :works="works" />
</template>

<script>
import Header from "./components/Header";
import Controls from "./components/Controls";
import Table from "./components/Table";
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Header, Controls, Table, Footer
  },
  data() {
    return {
      works: []
    }
  },
  methods: {
    async loadData(tag) {
      console.log(tag)
      await fetch('http://localhost:8081/api/v1/audiofiles/' + tag)
          .then(res => res.json())
          .then(resJson => {
            this.works = resJson
          });
    },
    focusTags(selection) {
      this.works = this.works.filter(track => selection.includes(track.id))
    }
  },
  watch: {
     works() {
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
