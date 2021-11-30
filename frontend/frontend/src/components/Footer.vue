<template>
  <footer class="footer">
  <span>Tags present in current selection ({{ tags.size }} displayed) </span>
    <span id="limit" @click="top5">Show Top 5</span>
    <div>
    <span class="tag" v-for="tag in tags.keys()" :key="tag.index" @click="focusTag(tags.get(tag))">{{ tag }} ({{ tags.get(tag).length }})</span> </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ['works'],
  methods: {
    focusTag(tracks) {
      this.$emit('focus', tracks)
    },
    top5() {
      let title = []
      let tags = []
      let i = this.tags.entries()
      for (let item of i) {
        if (title.length < 5) {
          title.push(item[0])
          tags.push(item[1].length)
        }
        let maximum = Math.max(...tags)
        let minimum = Math.min(...tags)
        if (item[1].length > maximum) {
          title.splice(tags.indexOf(minimum), 1, item[0])
          tags.splice(tags.indexOf(minimum), 1, item[1])
          maximum = Math.max(...tags)
          minimum = Math.min(...tags)
        }
      }
      this.$emit('top5-tags', title)
    }
  },
  computed: {
    tags() {
      let tagDirectory = new Map()
      for (let track of this.works) {
        let t = track.tags
        let taglist = t.split(', ')
        for (let tag of taglist) {
          if (tagDirectory.has(tag)) {
            let c = tagDirectory.get(tag)
            c.push(track.id);
            tagDirectory.set(tag, c);
          } else {
            const t = [];
            t.push(track.id);
            tagDirectory.set(tag, t);
          }
        }
      }
      return tagDirectory
    }
  }
}
</script>


<style scoped>

#limit {
  background: red;
}

.footer {
  position: fixed;
  height: 20%;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  overflow: hidden;
}

.tag {
  background: darkgrey;
  border-radius:5%;
  line-height: 26px;
  margin-right: 6px;
}

</style>

//<span class="tag" v-for="tag in tags.keys()" :key="tag.index" @click="focusTag(tag)">{{ tag }} ({{ tags.get(tag).length }})</span>
