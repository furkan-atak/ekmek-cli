  <template>
    <div style="margin: 6%;">
      <div style="margin-left: 4cm; height: 10cm; width: 82%; background-color: white; border-width: 0.01cm; border-color: black; border-style: solid;">
      <v-row>
        <v-col class="col-5"></v-col>
        <v-col>
        <br>
        <h1 style="padding-left: 11%;"> LOGIN </h1>
        <br>
        <vs-input class="" primary v-model="userName" label-placeholder="Kullanıcı Adı">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>
        <br>
        <div class="center content-inputs">
          <vs-input
            type="password"
            primary
            v-model="userPassword"
            label-placeholder="Şifre"
            :progress="getProgress"
            :visiblePassword="hasVisiblePassword"
            @click-icon="hasVisiblePassword = !hasVisiblePassword">
            <template #icon>
              <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
              <i v-else class='bx bx-hide'></i>
            </template>
            <template v-if="getProgress >= 100" #message-success>
              Secure password
            </template>
          </vs-input>
          <br>
          <vs-input primary v-model="mail" label-placeholder="Mail Adresi">
            <template #icon>
              <i class='bx bx-envelope'></i>
            </template>
          </vs-input>
          <vs-button
            gradient
            :active="activee == 1"
            @click="login"
            style="margin-left: 4%; margin-top: 10%; width: 30%; height: 50px; font-size: large;"
          >
            Login
          </vs-button>
        </div>
      </v-col>
      </v-row>
      </div>
    </div>
</template>


<script lang="ts" src="./index.ts"></script>

<style>
.vs-input {
  width: 40%;
  height: 60px;
  padding-bottom: 2%;
}


</style>


