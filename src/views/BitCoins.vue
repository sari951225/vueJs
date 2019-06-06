<<template>
    <div id="bitCoins">
        Price of bitcoins
        <section v-if="errors">
            <p>Ups, Ocurrio un error inesperado :c</p>
        </section>
        <section v-else>
            <div v-if="loading">Cargando...</div>
            <div
                v-else
                v-for="row in info"
            >
                {{row.description}}
                <span class="lighten"></span>
                <span v-html="row.symbol"></span>{{ row.rate_float | precioDecimal }} 
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errors: false
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi))
      .catch(error => {
        console.log(error);
        this.errors = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
    precioDecimal(value) {
      return value.toFixed(2);
    }
  }
};
</script>
