<template lang="html">
  <div :id="id" class="collection">
    <h2 v-if="label" v-html="label"></h2>
    <div :is="listType">
      <template v-for="(item,index) in collection">
        <slot :item="item" :index="index">
          <a v-if="item.hasOwnProperty('url')" :href="item.url" :title="item.description" target="_blank" class="external">{{item.libelle}}</a>
          <nuxt-link v-else-if="item.hasOwnProperty('to')" :to="item.to">{{item.libelle}}</nuxt-link>
          <template v-else>{{item}}</template><template v-if="index != collection.length - 1">, </template>
        </slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    'id': {
      type: String,
      default: ''
    },
    'label': {
      type: String,
      default: ''
    },
    'collection': {
      type: [Array, Object],
      default: []
    },
    'listType' : {
      type: String,
      default: 'div'
    }
  },
  methods: {
  }
}

</script>

<style lang="css" scoped>
</style>
