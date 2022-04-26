<template>
    <div class="center examplex">
      <br><br>
      <br><br>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col>
          <v-row>
           <v-container class="pa-12 text-center">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <template v-for="(item, i) in items">
                <v-col
                  style="padding-left: 0%; padding-right: 0.5%;"
                  :key="i"
                  cols="12"
                  md="4"
                >            
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src="item.image_url"
            ></v-img>

            <v-card-title> {{ item.name }} {{ item.surname }}</v-card-title>

            <v-card-text>
              <div> {{ item.explanation }} </div><br>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value=" item.starPoint "
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  {{ item.starPoint }} (413)
                </div>
              </v-row>

              <div class="my-3 text-subtitle-1">
                Price: {{ item.fee }}$
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Skills</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>C++</v-chip>

                <v-chip>JAVA</v-chip>

                <v-chip>Pthon</v-chip>

                <v-chip>SQL</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-col>
        </template>
      </v-row>
    </v-container>
    </v-row>
  </v-col>       
</v-row>
</div>
</template>

<script lang="ts" src="./index.ts"></script>
