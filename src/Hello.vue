<template>
  <div>
    <div>hello {{ user.name }}</div>
    <div>{{ user }}</div>
    <div>{{ admin }}</div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      user: {
        name: 'lee'
      },
      admin: false
    }
  },
  components: {},
  methods: {}
}
</script>
<style >
</style>
