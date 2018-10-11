<template>
    <div>
        <v-card>
            <!-- Somente aparece o nome do personagem -->
            <h2>{{caracters}}</h2>
            <!-- Imagem do personagem -->
            <img style="width: 400px" :src="imagem"/>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'personagens',
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