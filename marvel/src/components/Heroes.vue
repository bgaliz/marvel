<template>
    <v-container>
        <v-card>
            <v-layout align-center justify-center row fill-height>
                <v-flex xs7>
                    <!-- Imagem escolhida do herói -->
                    <img style="width: 400px" :src="imagem"/>
                </v-flex>
                <v-flex xs10>
                    <!-- Somente aparece o nome do personagem -->
                    <h2>Name: {{caracters}}</h2>
                    <v-divider style="margin-bottom: 40px"></v-divider>
                    <p>{{descricao}}</p>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
import MarvelComicsAPI from '@/components/MarvelComicsAPI.vue'
import Personagens from '@/components/Personagens.vue'

export default {
  name: 'Hero',
  components: {
    MarvelComicsAPI,
    Personagens
  },
  props: {
    caracters: {
      type: String
    },
    imagem: {
      type: String
    },
    descricao: {
      type: String
    }
  }
}
</script>