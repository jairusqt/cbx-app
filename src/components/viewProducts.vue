<template >
  <div id="app">
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col
          class="mt-12"
          v-for="product in products"
          :key="product"
          cols="6"
          sm="3"
        >
          <v-card
            class="mt-12"
            elevation="5"
          >
            <v-btn color="white" to="/viewTransactions" elevation="5" block height="100">{{product}}</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</div>
</template>

<script>
  export default {


    data: () => ({
      products: [
        'Paper Rolls',
        'Board'
      ]
    
    }),
  }
</script>

