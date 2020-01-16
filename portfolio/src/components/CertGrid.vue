<template>
    <div>
<v-container >
    <div class="d-none d-md-flex">
<h1 class="certs" >Certificados</h1>
</div>
<div class="d-flex d-sm-flex d-md-none">
<h1 class="certsMobile" style="font-size:20px">Certificados</h1>
</div>
          <v-divider color="blue" class="divider" ></v-divider>

    <v-row>
        <v-col cols="4" v-for="cert in certificados">
            <v-hover v-slot:default="{ hover }">
          <v-card @click="sendUrl"
                  :href="cert.link"
                    :elevation="hover ? 12 : 2"
          >
            <v-img :src="cert.cert"></v-img>
          </v-card>
                </v-hover>
        </v-col>
        
    </v-row>
</v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                certificados: [
                             
                    { cert: 'https://res.cloudinary.com/dhzled9ox/image/upload/v1568760565/diploma-frontend-developer_3_uio2qk.png',
                      link: 'https://platzi.com/@alandega/curso/1640-frontend-developer/diploma/detalle/'
                    },
                    { cert: 'https://res.cloudinary.com/dhzled9ox/image/upload/v1568760127/vue-pro-diploma_kqopwg.png',
                      link: 'https://platzi.com/@alandega/curso/1145-vuejs-profesional/diploma/detalle/'
                    },
                    { cert: 'https://res.cloudinary.com/dhzled9ox/image/upload/v1568760730/diploma-html-css_l6lety.png',
                      link: 'https://platzi.com/@alandega/curso/1492-html-css/diploma/detalle/'
                    },
                    { cert: 'https://res.cloudinary.com/dhzled9ox/image/upload/v1568840696/diploma-html5-css3_qcozdp.png',
                      link: 'https://platzi.com/@alandega/curso/1350-html5-css3/diploma/detalle/'
                    },
                    { cert: 'https://res.cloudinary.com/dhzled9ox/image/upload/v1568761750/diploma-fundamentos-javascript_svonqe.png',
                      link: 'https://platzi.com/@alandega/curso/1339-fundamentos-javascript/diploma/detalle/'
                    },
                    { cert: 'https://res.cloudinary.com/dhzled9ox/image/upload/v1568760646/diploma-vuejsba%CC%81sico_ykwygi.png',
                      link: 'https://platzi.com/@alandega/curso/1111-vuejs/diploma/detalle/'
                    ,
                    }
                     
                ]
            }
        },

        methods:{
            sendUrl(){
                 
            }
        }
    }
</script>

<style lang="scss" scoped>
.certs{
    margin-top: 40px;
    margin-bottom: -15px;
}
.certsMobile{
    margin-top: 20px;

}
</style>