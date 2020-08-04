<template>
  <div class="container">
    <div id="perso">
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
        <template slot-scope="{ item,index }">
          <dt>{{ item.debut }} à {{ item.fin }}</dt>
          <dd>
            <strong>{{ item.nom }}</strong> - {{ item.lieu }}
            <collection
              v-if="item.resume"
              :id="'resume'+index"
              :collection="item.resume"
              list-type="ul"
            >
              <template slot-scope="{item}">
                <li>{{item}}</li>
              </template>
            </collection>
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
body {
  margin:0;
  font-family:verdana,arial,sans-serif;
  font-size:0.8em;
  color:#000;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1em 1em;
}
#perso {
  position: sticky;
  top: 1em;
}
#pro {
  padding: 0 2em;
}
dl {
  margin: 0.6em;
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
  margin-bottom: 0.5em;
}
.diplome {
  font-style: italic;
  font-weight: bold;
}
h1 {
  margin-top:0;
  text-align:center;
  font-family:'century gothic gras italique',verdana,arial,sans-serif;
  background-color:hsl(39,73%,88%);
  color:hsl(240,100%,13%);
}
h2 {
  position: sticky;
  top: 0;
  padding-top: 0.5em;
  margin-top: 0;
  border-bottom: 3px double hsl(39, 73%, 80%);
  background: #fff;
  color: hsl(240, 100%, 13%);
}
ul { margin-top: 0.3em; }
ul li { margin-left:-2em; }
</style>
