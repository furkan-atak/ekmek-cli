  <template>
   
    <v-row>
      <v-col class="col-5"></v-col>
      <v-col style="width:20em;">
      <br>
      <br><br><br><br>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp; LOGIN </h1>
      <br><br>
      <vs-input class="large" primary v-model="value1" label-placeholder="Kullanıcı Adı">
        <template #icon>
          <i class='bx bx-user'></i>
        </template>
      </vs-input>
      <br>
      <div class="center content-inputs">
      <vs-input
        type="password"
        primary
        v-model="value2"
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
      <vs-input  class="large" primary v-model="value1" label-placeholder="Mail Adresi">
        <template #icon>
          <i class='bx bx-envelope'></i>
        </template>
      </vs-input>
    </div>
    </v-col>
  </v-row>
    
</template>


<script lang="ts" src="./index.ts"></script>

