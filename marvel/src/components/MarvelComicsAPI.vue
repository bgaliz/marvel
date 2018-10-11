<script>
// <!-- Importação do axios -->
import axios from 'axios'
export default {
  // 'https://gateway.marvel.com:443/v1/public/characters?limit=1&ts=1&apikey=f7ea04a5f4dad7c034195bc55d67baf9&hash=da88970dd44afe769cd195b6bf49feb7'
  // Criando função para requisitar (quantidade, retorno) dos heróis.
  getPersonagens: (limit, callback) => {
    // Salvando em uma variável o retorno da requisição
    const link = 'https://gateway.marvel.com:443/v1/public/characters?limit=' + limit + '&ts=1&apikey=f7ea04a5f4dad7c034195bc55d67baf9&hash=da88970dd44afe769cd195b6bf49feb7'
    // Usando axios junto com a variável criada.
    axios.get(link).then((response) => {
      if (callback) {
        callback(response)
      }
    })
  }
}
</script>
