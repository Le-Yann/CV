<template lang="html">
  <div class="h-card">
    <img v-if="item.photo" :src="item.photo" class="u-photo" alt="" />
    <h1 class="p-name">{{item.prenom}} {{item.nom}}</h1>
    <p v-if="item.adresse" class="p-adr h-adr">
      <span class="p-street-address">{{item.adresse.numero}}, {{item.adresse.voie}}</span>
      <br/>
      <span class="p-postal-code">{{item.adresse.cp}}</span>
      <span class="p-locality">{{item.adresse.ville}}</span><br/>
      <span class="p-country-name">{{item.adresse.pays}}</span>
    </p>
    <p class="p-tel">{{item.contact.tel}}</p>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="css" scoped>
</style>
