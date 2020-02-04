<template>
  <div class="container">
    <div>
      <hcard id="contact" :item="personnes[0]" />
      <collection
        id="loisirs"
        :collection="loisirs"
        label="Loisirs"
      ></collection>
    </div>
    <div id="pro">
      <!-- <listing id="realisations" :liste="realisations" label="Réalisations" /> -->
      <collection
        id="realisations"
        :collection="realisations"
        label="Réalisations"
        list-type="dl"
      >
        <template slot-scope="{ item, index }">
          <dt>{{ index }}</dt>
          <dd>
            <collection :id="index" :collection="item.contenu" />
          </dd>
        </template>
      </collection>
      <collection
        id="competences"
        :collection="competences"
        label="Compétences"
        list-type="dl"
      >
        <template slot-scope="{ item, index }">
          <dt>{{ index }}</dt>
          <dd>
            <collection :id="index" :collection="item.contenu" />
          </dd>
        </template>
      </collection>
      <collection
        id="experiences"
        :collection="experiences"
        label="Experience Professionnelle"
        list-type="dl"
      >
        <template slot-scope="{ item }">
          <dt>{{ item.debut }} à {{ item.fin }}</dt>
          <dd>
            <strong>{{ item.nom }}</strong> - {{ item.lieu }}
          </dd>
        </template>
      </collection>
      <collection
        id="formations"
        :collection="formations"
        label="Formations et <i>Diplômes</i>"
        list-type="dl"
      >
        <template slot-scope="{ item }">
          <dt>
            {{ item.debut }}<span v-if="item.fin"> à {{ item.fin }}</span>
          </dt>
          <dd>
            <span v-html="item.nom"></span> - {{ item.lieu }}<br />
            {{ item.resume }}
          </dd>
        </template>
      </collection>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Hcard from '~/components/Hcard.vue'
import Collection from '~/components/Collection.vue'
import { personnes } from '~/assets/personnes.js'
import realisations from '~/assets/realisations.js'
import competences from '~/assets/competences.js'
import { experiences } from '~/assets/experiences.js'
import { formations } from '~/assets/formations.js'
import { loisirs } from '~/assets/loisirs.js'

export default {
  components: {
    Hcard,
    Collection
  },
  asyncData({ params }) {
    return {
      personnes,
      realisations,
      competences,
      experiences: _.orderBy(
        experiences,
        (item) => new Date(item.debut),
        'desc'
      ),
      formations: _.orderBy(formations, (item) => new Date(item.debut), 'desc'),
      loisirs
    }
  },
  methods: {
    isObject: (item) => _.isObject(item)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: verdana, arial, sans-serif;
  padding: 1em;
}
#contact {
  position: sticky;
  top: 1em;
}
#pro {
  padding: 0 2em;
}
dl {
  display: flex;
  flex-wrap: wrap;
}
dt {
  flex: 1 1 15%;
  text-align: left;
}
dd {
  flex: 1 1 85%;
  text-align: left;
}
.diplome {
  font-style: italic;
  font-weight: bold;
}
h2 {
  padding-top: 0;
  margin-top: 0;
  border-bottom: 3px double hsl(39, 73%, 80%);
  background: #fff;
  color: hsl(240, 100%, 13%);
}
</style>
