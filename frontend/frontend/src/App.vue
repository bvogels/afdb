<template>
  <Header />
  <Controls @load-data="loadData()"/>
  <Table :works="focusTags" />
  <Footer @focus="focusTags" :works="focusTags()" />
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
    async loadData() {
      await fetch('http://localhost:8081/api/v1/audiofiles')
          .then(res => res.json())
          .then(resJson => {
            this.works = resJson;
          });
    },
    focusTags(tracks) {
      watchEffect(() => console.log(this.tracks))
      console.log("Focus: ", tracks)
      console.log("Work:", this.works)
      console.log("Test: ", this.works[0].title)

      //let focused = this.works.filter( t => tracks.includes(t));
      //console.log(focused)
      return this.works

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
