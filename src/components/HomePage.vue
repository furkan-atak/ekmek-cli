<template>
  <div style="margin-top: 1.5cm;">
    <v-carousel height="%90">   
      <v-carousel-item
        v-for="(item,i) in items"
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
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Web Programlama</h3>
            </template>
            <template #img>
              <img src="../assets/web.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Mobil Yazılım</h3>
            </template>
            <template #img>
              <img src="../assets/mobile.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Oyun Geliştirme</h3>
            </template>
            <template #img>
              <img src="../assets/game.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Masaüstü Uygulamalar</h3>
            </template>
            <template #img>
              <img src="../assets/masaustu.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Geliştirici Operasyonları (DevOps)</h3>
            </template>
            <template #img>
              <img src="../assets/devops.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Diğer Yazılım Teknolojileri</h3>
            </template>
            <template #img>
              <img src="../assets/diger.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>


        </v-row>
        </v-col>
        
        </v-row>
  </div>
</template>

<script lang="ts" src="./homepage.ts"></script>
