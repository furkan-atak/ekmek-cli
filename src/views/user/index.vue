<template>
    <div style="width: 100%; height: 100%; background-color: #E9ECF2;">
        <div style="width: 100%; height: 200px; margin-top: 2.5%; background-color: rgb(24, 32, 43);">
                <v-row style="margin-top: 2%;">
                    <h1 style="margin-left: 10%; margin-top: 3%; color: #F5F7FA; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight: 500;">
                        {{ 'Yüksek Kaliteli Freelancer Hizmeti ve Teklifleri Alın' }}  </h1>
                </v-row>
                <v-row>
                    <span style="margin-left: 10.3%; color: #ABB2C4; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                    {{  'Kaliteli Serbest çalışan yetenek mi arıyorsunuz? Ekmek Halleder.' }} </span>
                </v-row>
            </div>
            <div>
                <v-row>
                    <v-col cols="4" style="height: 600px; padding-bottom: 10%;">

                        <v-avatar
                                style="border-style: solid; margin-left: 52%; margin-top: 4%;"
                                color="#23395d"
                                size="130"
                                
                                >
                                <!--<img v-if="user.imageUrl" :src="user.imageUrl"> 
                                <span v-if="!user.imageUrl" class="white--text text-h5">{{ nameSurname }}</span>-->
                                <img :src="user.imageUrl"> 
                                </v-avatar>
                        <div style="width: 80%; height: 100%; margin-left: 25%; margin-top: -13%; margin-bottom: 2%; background-color: white;">
                            <br><br>
                            <br><br>
                            <v-row style="margin-left: 5%;">
                                <h1 style="color: #32353B;"> {{ user.username }}</h1>
                            </v-row>
                            <v-row style="margin-left: 5%;">
                                <p style="color: #32353B;"> {{ user.role['name'] }}</p>
                            </v-row>
                            <br><br>
                            <v-row style="margin-left: 5%;">
                                Satın Alınanlar:<p style="color: #32353B; font-weight: bold;">  {{ user.purchases.length }}</p>
                            </v-row>
                            <v-row style="margin-left: 5%;">
                                Email:<p style="color: #32353B; font-weight: bold;">  {{ user.email }}</p>
                            </v-row>
                            <v-row v-if="user.role['name'] === 'Freelancer'">
                                <vs-button
                                    style="margin-left: 16%; max-width: none; width: 70%; height: 15%; font-size: x-large;"

                                    :active="false"
                                    @click="navigate(`freelancer/profile?freelancerId=${freelancerId}`)"
                                    color="#4774B7"
                                    square
                                    >
                                    <i class="bx bxs-user-pin"></i>
                                    Freelancer Aktivitesi
                                </vs-button>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="7" style="height: 800px; padding-bottom: 10%; margin-left: 2%; margin-top: 5.5%;">
                        <template>
                            <v-card>
                            <v-tabs v-model="tab" dark background-color="red lighten-2">
                                <v-tab>Satın Alınanlar</v-tab>
                                <v-tab>Projeler</v-tab>
                            </v-tabs>
                            </v-card>
                            <v-card>
                                <div style="width:100%; max-height: 600px; margin-top: 0%;">
                                    <offer-general :offerIds="user.purchases" style="max-height: 600px; overflow-x: auto;" v-if="tab === 0"/>
                                    <project-list :fromUser="true" style="max-height: 600px; overflow-x: auto;"  v-if="tab === 1"/>
                                </div>
                            </v-card>
                        </template>
                    </v-col>
                </v-row>
            </div>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>
