<template lang="html">
  <div :id="id" class="collection">
    <h2 v-if="label" v-html="label"></h2>
    <div :is="listType">
      <template v-for="(item,index) in collection">
        <slot :item="item" :index="index"><span  v-html="linkify(item)"></span><span v-if="index != collection.length - 1">, </span></slot>
      </template>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
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
    linkify(item) {
      return _.isObject(item) && _.has(item,'url') ? '<a href="'+item.url+'" title="'+item.description+'">'+item.libelle+'</a>' : item
    },
    listing(items) {
      items = _.map(items,(i) => this.linkify(i))
      return _.join(items,', ')
    }
  }
}

</script>

<style lang="css" scoped>
</style>
