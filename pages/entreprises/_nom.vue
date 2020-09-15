<template lang="html">
  <div class="">
    <h1>{{nom}}</h1>
    <div>
      {{entreprise.texte}}
    </div>
  </div>
</template>

<script>
export default {
  validate({params,store}) {
    return store.state.entreprises.find(entreprise => entreprise.nom === params.nom)
  },
  data () {
    return {
      nom:this.$route.params.nom
    }
  },
  computed: {
    entreprise () {
      return this.$store.state.entreprises.find(entreprise => entreprise.nom === this.nom)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
