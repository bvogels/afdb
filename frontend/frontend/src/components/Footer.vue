<template>
  <footer class="footer">
  <div>Tags present in current selection</div>
    <span class="tag" v-for="tag in tags.keys()" :key="tag.index">{{ tag }}</span>
  </footer>

</template>

<script>
export default {
  name: "Footer",
  props: ['works'],
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
  },
}
</script>


<style scoped>

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