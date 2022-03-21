<template>
    <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <template #left>
          <img src="/logo2.png" alt="">
        </template>
        <vs-navbar-group>
          Yazılım & Teknoloji
          <template #items>
            <vs-navbar-item :active="active == 'guide'" id="guide">
              Programlama
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
              Veri Bilimi
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
              Veritabanı
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <vs-navbar-group>
          Çeviri & Yazı

          <template #items>
            <vs-navbar-item :active="active == 'content'" id="content">
              İçerik Yazımı
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Business'" id="Business">
              İş Yazısı
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Resumes'" id="Resumes">
              Özgeçmiş
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
         Grafik & Tasarım

          <template #items>
            <vs-navbar-item :active="active == 'Animation'" id="Animation">
              Animasyon
            </vs-navbar-item>
            <vs-navbar-item :active="active == '3D'" id="3D">
              3D Tasarım
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Cartoon'" id="Cartoon">
              Karikatür
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
          İş & Yönetim

          <template #items>
            <vs-navbar-item :active="active == 'Commerce'" id="Commerce">
              E-Ticaret Pazarlama
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Influencer'" id="Influencer">
              Influencer Marketing
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'SEO'" id="SEO">
              SEO
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>

        <vs-navbar-item :active="active == 'License'" id="License">
          Hakkımızda
        </vs-navbar-item>

        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
      <br><br>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col>
          <v-row >
            <v-card
            @click="logAt('/')"
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
              src="../../../assets/web.png"
            ></v-img>

            <v-card-title class="font-weight-bold">Web Programlama</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >                
              </v-row>

              <div v-text="data + ' İlan'" class="my-4 text-subtitle-1">
               
              </div>
            </v-card-text>

            <v-divider class="mx-2"></v-divider>

            <v-card-text>
            <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>
          </v-card>
          <v-card
            @click="logAt('/')"
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
              src="../../../assets/mobile.png"
            ></v-img>

            <v-card-title class="font-weight-bold">Mobil Yazılım</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                
              </v-row>

              <div v-text="data + ' İlan'" class="my-4 text-subtitle-1">
               
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
            <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>
          </v-card>
          <v-card
            @click="logAt('/')"
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
              src="../../../assets/game.png"
            ></v-img>

            <v-card-title class="font-weight-bold">Oyun Geliştirme</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                
              </v-row>

              <div v-text="data + ' İlan'" class="my-4 text-subtitle-1">
               
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
            <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>
          </v-card>
          <v-card
            @click="logAt('/')"
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
              src="../../../assets/masaustu.png"
            ></v-img>

            <v-card-title class="font-weight-bold">Masaüstü Uygulamalar</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                
              </v-row>

              <div v-text="data + ' İlan'" class="my-4 text-subtitle-1">
               
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
            <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>
          </v-card>
          <v-card
            @click="logAt('/')"
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
              src="../../../assets/devops.png"
            ></v-img>

            <v-card-title class="font-weight-bold">Geliştirici Operasyonları Devops</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                
              </v-row>

              <div v-text="data + ' İlan'" class="my-4 text-subtitle-1">
               
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
            <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>
          </v-card>
          <v-card
            @click="logAt('/')"
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
              src="../../../assets/diger.png"
            ></v-img>

            <v-card-title class="font-weight-bold">Diğer Yazılım Teknolojileri</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                
              </v-row>

              <div v-text="data + ' İlan'" class="my-4 text-subtitle-1">
               
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
            <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>
          </v-card>

        </v-row>
        </v-col>
        
        </v-row>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>
