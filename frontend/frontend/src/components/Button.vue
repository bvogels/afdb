<template>
  <form @submit="onClick" class="add-form">
    <div class="form-control">
      <label>Tags: </label>
      <input type="text" v-model="tag" name="tag" placeholder="tag" />
      <input type="submit" value="Query Tags" />
    </div>
  </form>

</template>

<script>

export default {
  name: "Button",
  data() {
    return {
      tag: '',
    }
  },
  methods: {
     onClick(e) {
       e.preventDefault()
       //console.log(this.tag)
       this.$emit('load-data', this.tag);
     }
  },
  emits: ['load-data']
}
</script>

<style scoped>
button {
  margin-right: 10px;
}


</style>