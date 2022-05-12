<template >
  <div id="app">
  <v-app id="inspire">
    <v-container>
      <v-row justify="center" style="height: 500px">
        <v-col
          v-for="transaction in transactions"
          :key="transaction"
          cols="9"
          sm="3"
          align-self="end"
        >
          <v-card

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

