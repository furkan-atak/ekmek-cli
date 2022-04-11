<template>
    <div class="center examplex"> 
      <br><br>
      <br><br>
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
                Web Programlamayla alakalı html, php, javascript vb. tüm yazılım dillerindeki iş ilanlarını içermektedir.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  17 İş İlanı
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
                Mobil Yazılım, Swift, AndroidStudio vb. işlerini barındırmaktadır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  23 İş İlanı
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
                Oyun geliştirmesinde Unreal Engine, Unity vb. diğer tüm yazılım dillerini içermektedir.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  9 İş İlanı
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
                Masaüstü uygulamlarında C++, C# , Java gibi platformlarda yazılan uygulamarı barındırır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  35 İş İlanı
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
                Yazılım geliştiriken gerekli tüm aşamaları istişare etmek için DevOps.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  86 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Veri Bilimi</h3>
            </template>
            <template #img>
              <img src="../assets/veribilimi.png" alt="">
            </template>
            <template #text>
              <p>
                Bilimsel yöntemleri, süreçleri, algoritmaları ve sistemleri kullanarak problemleri çöz.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  42 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Donanım Destek</h3>
            </template>
            <template #img>
              <img src="../assets/donanim.jpg" alt="">
            </template>
            <template #text>
              <p>
                Her türlü donanım sorunlarınızın çözümünü içeren alan.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  75 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Veri Tabanı</h3>
            </template>
            <template #img>
              <img src="../assets/veritabani.jpg" alt="">
            </template>
            <template #text>
              <p>
                Bilgisayarda bilgi depolama ve bilgiye erişim konularında yeni yöntemleri barındırır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  29 İş İlanı
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
                Belirtilen alanlar dışında iş ilanlarını barındırır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  103 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>


        </v-row>
        </v-col>
        
        </v-row>
    </div>
</template>

<script lang="ts" src="./hello.ts"></script>
