<template>
  <v-app dark>
      <v-toolbar color="red">
        <v-toolbar-title>Marvel</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div id="app">
          <v-layout v-if="display"
          v-model="heroID" 
          align-center 
          justify-center 
          row 
          wrap 
          fill-height 
          ma-4>
            <v-flex xs4 v-for="personagem in personagens" :key="personagens.id" pa-2>
              <Personagens
                @click.native="selectHero(personagem.id,personagem.name,personagem.description,personagem.thumbnail.path)"
                v-model="heroID"
                :caracters="personagem.name"
                :descricao="personagem.description"
                :imagem="getImagem(personagem)"
              ></Personagens>
            </v-flex>
          </v-layout>
          <v-layout v-else>
              <v-flex xs12 :key="heroID" pa-2>
                <Hero
                :caracters="heroName"
                :descricao="heroDescription"
                :imagem="heroImage"
                ></Hero>
              </v-flex>
          </v-layout>
      </div>  
  </v-app>
</template>

<script>
import MarvelComicsAPI from '@/components/MarvelComicsAPI.vue'
import Personagens from '@/components/Personagens.vue'
import Hero from '@/components/Heroes.vue'

export default {
  name: 'App',
  components: {
    MarvelComicsAPI,
    Personagens,
    Hero
  },
  data () {
    return {
      personagens: [],
      heroID: '',
      heroName: '',
      heroDescription: '',
      heroImage: '',
      display: true
    }
  },
  created () {
    // caracteres recebe como parâmetro o 'this', que é o alvo que faz a chamada da função
    var caracter = this
    MarvelComicsAPI.getPersonagens(50, response => {
      caracter.personagens = response.data.data.results
    })
  },
  methods: {
    getImagem: function (personagens) {
      if (personagens.thumbnail) {
        return personagens.thumbnail.path + '.jpg'
      }
    },
    selectHero: function (id, name, description, img) {
      this.display = false
      this.heroID = id
      this.heroName = name
      this.heroDescription = description
      this.heroImage = img + '.jpg'
    }
  }
}
</script>
