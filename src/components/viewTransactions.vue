<template >
  <div id="app">
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col
          class="mt-12"
          v-for="transaction in transactions"
          :key="transaction"
          cols="9"
          sm="3"          
        >
          <v-card
            class="mt-12"
            outlined
            tile
            elevation="5"
          >
            <v-btn color="white" elevation="5" block height="100">{{transaction}}</v-btn>
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
      transactions: [
        'Issuance',
        'Generate Tag',
        'Transfer'
      ]
    
    }),
  }
</script>

