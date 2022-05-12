<template >
  <div>
    <v-container id="inspire">
      <v-row no-gutters>
        <v-col
          md="6"
          offset-md="3"
          class="mt-12"
        >
          <v-card
            class="pa-2 mt-12 elevation-5"
            outlined
            tile
            height="100"
            
          > 
              <v-col cols="12">
            <v-text-field
              v-model="message"
              outlined
              clearable
              label="Work Order Number"
              type="text"
            >
              <template v-slot:prepend>
                <v-tooltip
                  bottom
                >
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">
                      mdi-magnify
                    </v-icon>
                  </template>
                  Search for Work Order Number
                </v-tooltip>
              </template>

              <template v-slot:append-outer>
                <v-menu
                  
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      to="/viewProducts"
                      v-bind="attrs"
                      v-on="on"
                      class="elevation-5 "
                    > 
                      <v-icon left>
                        mdi-magnify
                      </v-icon>
                      search
                    </v-btn>
                  </template>
                </v-menu>
              </template>
            </v-text-field>
          </v-col>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
  </div>
</template>

<script>
  export default {


    data: () => ({
      
    
    }),
  }
</script>

