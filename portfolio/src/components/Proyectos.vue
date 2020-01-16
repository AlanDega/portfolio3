<template>
    <div class="d-none d-md-flex">
<v-container class="proyecto1" > 

    <h1 class="proyectosTitle" >Proyectos</h1>
          <v-divider color="blue" class="divider" ></v-divider>

    <v-row 
    align="center"
    justify="center">
        <v-col cols="8">
            <v-card>
          <v-img width="100%" height="100%" src="https://res.cloudinary.com/dhzled9ox/image/upload/v1568835299/Screen_Shot_2019-09-18_at_2.33.34_PM_kcqloh.png"></v-img>

            </v-card>
        </v-col>
        <v-col cols="4">
     

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="titleList">DegaVid</v-list-item-title>
        <v-list-item-subtitle class="subtitle"> Interfaz Gráfica para aplicación de streaming.
            </v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle"> El usuario puede interactuar con los elementos para obtener más información. </v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle"> con este tema desarrollé las páginas de Log in, Sign Up y 404. </v-list-item-subtitle>
            </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title2">Tech Stack</v-list-item-title>
        <v-list-item-subtitle>
          CSS
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          SASS
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          HTML
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Figma
        </v-list-item-subtitle>
        
      </v-list-item-content>
    </v-list-item>

                   
                    
                      <v-row align="center" justify="center">
                        <v-col cols="4" justify="center">
                      <v-btn dark>Código</v-btn>

                        </v-col>
                        <v-col cols="4">
                                            <v-btn dark href="https://degavid-e0cea.firebaseapp.com"> Demo </v-btn>

                        </v-col>

                      </v-row>

        </v-col>
    </v-row>
           <v-row 
    align="center"
    justify="center">
        <v-col cols="8">
            <v-card>
          <v-img width="100%" height="100%" src="https://res.cloudinary.com/dhzled9ox/image/upload/v1568831083/Screen_Shot_2019-09-18_at_1.18.10_PM_bzlc2u.png"></v-img>

            </v-card>
        </v-col>
        <v-col cols="4">
     

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="titleList">DegaArcade</v-list-item-title>
        <v-list-item-subtitle class="subtitle">Esta aplicación es un juego de memoria, tienes que recordar el patrón de los colores que se iluminaron.
            </v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle">tiene 10 niveles, ganes o pierdas el juego se reinicia automáticamente.
            </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title2">Tech Stack</v-list-item-title>
        <v-list-item-subtitle>
          JS vainilla
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          CSS
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          HTML
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Figma
        </v-list-item-subtitle>
        
      </v-list-item-content>
    </v-list-item>

                   
                    
                      <v-row align="center" justify="center">
                        <v-col cols="4" justify="center">
                      <v-btn dark href="https://github.com/AlanDega/Dega-Arcade">Código</v-btn>

                        </v-col>
                        <v-col cols="4">
                                            <v-btn dark href="https://degarcade-bcacb.firebaseapp.com"> Demo </v-btn>

                        </v-col>

                      </v-row>
                     
        </v-col>
    </v-row>
           <v-row 
    align="center"
    justify="center">
        <v-col cols="8">
            <v-card>
          <v-img width="100%" height="100%" src="https://res.cloudinary.com/dhzled9ox/image/upload/v1568922277/Screen_Shot_2019-09-19_at_2.43.37_PM_qc247w.png"></v-img>

            </v-card>
        </v-col>
        <v-col cols="4">
            
     

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="titleList">DegaSound</v-list-item-title>
        <v-list-item-subtitle class="subtitle">En esta aplicación puedes buscar y reproducir cualquier canción que tenga preview en spotify.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title2">Tech Stack</v-list-item-title>
        <v-list-item-subtitle>
          Vue JS
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Vuex
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          HTML
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          CSS
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Trae
        </v-list-item-subtitle>
        
      </v-list-item-content>
    </v-list-item>

                  
                      <v-row align="center" justify="center">
                        <v-col cols="4" justify="center">
                      <v-btn dark href="https://github.com/AlanDega/DegaSound" >Código</v-btn>

                        </v-col>
                        <v-col cols="4">
                                            <v-btn dark href="https://degasound.firebaseapp.com"> Demo </v-btn>

                        </v-col>

                      </v-row>
                     
        </v-col>
    </v-row>
</v-container>
    </div>
</template>

<script>
    
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }

</script>

<style lang="scss" >
.techStack1{
    background-color: black;
}

h1{
  font-size: 40px;
    margin-top: 10px;
    margin-bottom: 0px;
    color: rgb(0, 0, 0);
}

h2{
    color: #ffff;
}
.titleList{
    color: rgb(47, 0, 255);
}
.subtitle{
    color:white;
}
.title2{
    color: rgb(47, 0, 255) 
}
.divider{
  margin-top:15px;
  margin-bottom: 15px;
  .proyectosTitle{
    margin-bottom: -15px;
  }

  .btnLeft{
    margin-right: 20px;
  }
  .btnRight{
    margin-left: 2em;
  }
}


</style>

// componente de cada proyecto 
Esta aplicación es una plataforma de Esports en la cual puedes crear tus torneos con fecha y hora.
cuando creas tú torneo automaticamente se agrega a la lista de torneos y otros usuarios se pueden registrar.

