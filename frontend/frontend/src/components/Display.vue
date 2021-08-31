<template>
  <tr v-for="value in works" :key="value.index">
    <td>
      {{ value.index }}
    </td>
    <td>
      {{ value.id }}
    </td>
    <td>
      {{ value.title }}
    </td>
    <td>
      {{ value.cfirstname }}
    </td>
    <td>
      {{ value.clastname }}
    </td>
    <td>
      {{ value.interpret }}
    </td>
    <td>
      {{ value.length }}
    </td>
    <td>
      -path-
    </td>
    <td class="macostag">
      <span class="tag" v-for="tag in tags(value)" :key="tag.index">
      {{ tag }}
      </span>
    </td>
  </tr>
</template>

<script>

export default {
  name: "Display",
  props: {
    works: {
      type: Array
    }
  },
  methods: {
    tags(track) {
      return track.tags.split(', ')
    }
  }
}

</script>
/this.y.set(x, track.id
<style scoped>
td {
  border: 1px solid
}

tr:hover {
  background-color: gray;
}

.macostag {
  width: 15%;
  word-break: break-word;
}

.tag {
  background: darkgrey;
  border-radius:5%;
  line-height: 26px;
  margin-right: 6px;
}
</style>