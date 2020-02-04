<template lang="html">
  <div class="h-event">
    <h1 class="p-name">{{item.nom}}</h1>
    <p>De
      <time class="dt-start" datetime="2013-06-30 12:00">{{item.debut}}</time>
      à <time class="dt-end" datetime="2013-06-30 18:00">{{item.fin}}</time>
      lieu : <span class="p-location">{{item.lieu}}</span></p>
    <p class="p-summary">{{item.resume}}</p>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="css" scoped>
</style>
