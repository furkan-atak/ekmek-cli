<template>
    <div style="width: 100%; height: 100%;  background-color: aliceblue;">
        <div style="margin: 2%; padding-top: 5%;">
            <template v-for="(item, i) in projects">
                <v-row  :key="i">
                    <v-col> 
                        <v-hover v-slot="{ hover }">
                            <v-card
                                :elevation="hover ? 12 : 2"
                                :class="{ 'on-hover': hover }"
                                :style=" hover ? 'background-color: #FFE9EC;' : '' "
                                height="150px"
                                shaped
                            >     
                                <v-card-title style="min-height: none; height: 2%;">{{ item.header }}</v-card-title>
                                <v-card-text style="min-width: none; width: 10%; min-height: 0%; height: 5%; margin-left: 84.5%;  padding: 0%; font-size: 40px; font-weight: 900; color: #3D66D7;">
                                {{ currencyTemplate(item.Currency) + item.Budget }}</v-card-text>
                                <v-card-text style="min-width: none; width: 10%; min-height: 0%; height: 5%; margin-left: 85%; margin-top: 1.2%; padding: 0%;">{{ budgetTypeTemplate(item.BudgetType) }}</v-card-text>
                                
                                <p style="height: 0%; padding-top: 0%; padding-bottom: 0%; padding-left: 2%;"> {{ item.description }} </p>
                                <v-card-text style="min-width: none; width: 70%; min-height: none; height: 5%; font-size: medium; padding-top: 2.3%;"> 
                                <v-icon style="padding-bottom: 0.5%;">mdi-clock-time-three-outline</v-icon>
                                {{ getTimePast(item.createdAt) }}
                                <v-icon style="padding-bottom: 0.5%;">mdi-map-marker-outline</v-icon>Uzaktan &nbsp;&nbsp;
                                <v-icon style="padding-bottom: 0.5%; padding-left: 0%;">mdi-tag</v-icon>
                                Teklifler {{ i }}&nbsp;&nbsp;
                                <v-icon style="padding-bottom: 0.5%; padding-left: 0%;">mdi-heart</v-icon>
                                Favoriler {{ i }}
                                </v-card-text>
                                
                                <v-btn
                                style="left: 80%; width: 15%; bottom: 20%;"
                                outlined
                                color="indigo"
                                >
                                <v-icon>mdi-offer</v-icon> Teklİf Ver 
                                </v-btn>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </template> 
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>
