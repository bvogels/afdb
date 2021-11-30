<template>
  <Header />
  <Controls @search-term="loadData"/>
  <Table :works="works" />
  <Footer @top5-tags="topFiveTags" @focus="focusTags" :works="works" />
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
      works: ([])
    }
  },
  methods: {
    async loadData(searchTerm) {
      this.selection = searchTerm
      await fetch('http://localhost:8081/api/v1/audiofiles/' + searchTerm)
          .then(res => res.json())
          .then(resJson => {
            this.works = resJson
          });
    },
    focusTags(selection) {
      this.works = this.works.filter(track => selection.includes(track.id))
    },
    //topFiveTags(topTags) {
      //for (let item in this.works) {

      //}
      //console.log(tags)
    //}
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
