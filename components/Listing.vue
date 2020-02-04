<template lang="html">
  <div :id="id" class="listing">
    <h2>{{label}}</h2>
    <dl class="">
      <template v-for="(items,categorie) in liste">
        <dt>{{categorie}}</dt>
        <dd>
          <span v-html="listing(items.contenu)" v-if="items.display=='inline'"></span>
          <ul v-else>
            <li v-for="item in items.contenu" v-html="linkify(item)"></li>
          </ul>
        </dd>
      </template>
    </dl>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props:['id','label','liste'],
  methods: {
    linkify: function(item) {
      return _.isObject(item) ? '<a href="'+item.url+'" title="'+item.description+'">'+item.libelle+'</a>' : item
    },
    listing: function(items) {
      items = _.map(items,(i) => this.linkify(i))
      return _.join(items,', ')
    }
  }
}
</script>

<style lang="css" scoped>
.listing {
  display: flex;
  flex-flow: column;
}
h2{
  padding-top:0;
  margin-top:0;
  /* padding-bottom:0; */
  /* margin-bottom:-3px; */
  border-bottom:3px double hsl(39,73%,80%);
  background:#fff;
  color: hsl(240,100%,13%)
}
dl {
  display: flex;
  flex-wrap: wrap;
}
dt {
  width: 15%;
  text-align: left;
}
dd {
  width: 85%;
  text-align: left;
}
ul {
  list-style:none;
  padding-left:0;
  /* margin: -1em 0 0; */
}
</style>
