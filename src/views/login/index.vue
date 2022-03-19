  <template>
    <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <template #left>
          <img src="/logo2.png" alt="">
        </template>
        <vs-navbar-group>
          Programming & Technology
          <template #items>
            <vs-navbar-item :active="active == 'guide'" id="guide">
              Programming
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
              Data Science
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
              Database
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <vs-navbar-group>
          Writing & Translation

          <template #items>
            <vs-navbar-item :active="active == 'content'" id="content">
              Content Writing
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Business'" id="Business">
              Business Writing
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Resumes'" id="Resumes">
              Resumes
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
          Design

          <template #items>
            <vs-navbar-item :active="active == 'Animation'" id="Animation">
              Animation
            </vs-navbar-item>
            <vs-navbar-item :active="active == '3D'" id="3D">
              3D Design
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Cartoon'" id="Cartoon">
              Cartoon
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
          Analytics

          <template #items>
            <vs-navbar-item :active="active == 'Commerce'" id="Commerce">
              E-Commerce Marketing
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
          License
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
              src="../../assets/prog.png"
            ></v-img>

            <v-card-title>Programming And Coding</v-card-title>
            
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                ~ • Popularity
              </div>

              <div>Programming is the general process of creating a program that follows certain standards and performs a certain task.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Job Counts: 56</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>C/C++</v-chip>

                <v-chip>Java</v-chip>

                <v-chip>Python</v-chip>

                <v-chip>C#</v-chip>
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
          <v-card
            :loading="loading"
            class="mx-auto my-12 col-12"
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
              src="../../assets/mobile_app.png"
            ></v-img>

            <v-card-title>Mobile App</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                $ • Popularity
              </div>

              <div>Mobile App developement, learning managing. You can apply for a mobile app developement process here.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Job Counts: 26</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>Android</v-chip>

                <v-chip>IOS</v-chip>

                <v-chip>Kotlin</v-chip>

                <v-chip>Flutter</v-chip>
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
              src="../../assets/database.png"
            ></v-img>

            <v-card-title>Database</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                $ • Popularity
              </div>

              <div>Sql - NoSQL, POSTGRE, MSSQL, MONGODb, MySQL And More.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Job Counts: 32</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>NoSQL</v-chip>

                <v-chip>PostgreSql</v-chip>

                <v-chip>MSSQL</v-chip>

                <v-chip>MySQL</v-chip>
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
        </v-row>
        </v-col>
        
        </v-row>
    </div>
</template>


<script lang="ts" src="./index.ts"></script>