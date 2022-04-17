<template>
  <div style="margin-top: 1.5cm;">
    <v-carousel>   
      <v-carousel-item
        v-for="(item,i) in itemk"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      
  </v-carousel>
  <br>
  <br>
  <v-row>
        <v-col cols="3"></v-col>
        <v-col>
          <v-row >   
          <h1 style="padding-left: 5%;"> En Popüler Kategoriler </h1>         
          <v-container class="pa-12 text-center">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <template v-for="(item, i) in items">
                <v-col
                  style="padding-left: 0cm;"
                  :key="i"
                  cols="12"
                  md="2"
                >
                  <v-hover v-slot="{ hover }">
                    <v-card
                      style="width: 85%; cursor: pointer; padding-left: 0cm; padding-right: 0cm;"
                      :elevation="hover ? 24 : 2"
                      :class="{ 'on-hover': hover }"
                    >
                      <v-img
                        :src="item.img"
                        height="300px"
                      >
                        <v-card-title class="text-h6 white--text">
                          <v-row
                            :elevation="hover ? 24 : 2"
                            class="fill-height flex-column"
                            justify="space-between"
                          >
                            <p :style="hover ? 'text-decoration: underline;' : 'text-decoration:none;'" class="mt-4 subheading text-left">
                              {{ item.title }}
                            </p>
                            <div>
                              <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                                {{ item.text }}
                              </p>
                              <p class="text-caption font-weight-medium font-italic text-left">
                                {{ item.subtext }}
                              </p>
                            </div>
                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons"
                                :key="index"
                                :class="{ 'show-btns': hover }"
                                icon
                              >
                              </v-btn>
                            </div>
                          </v-row>
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-row>
        </v-col>      
        </v-row>
  </div>
</template>

<script lang="ts" src="./homepage.ts"></script>

<style>
.container {
  position: relative;
  color: black;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}
</style>