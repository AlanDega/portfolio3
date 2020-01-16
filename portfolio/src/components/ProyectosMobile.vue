<template>
   <div class="d-flex d-sm-flex d-md-none">
<v-container class="proyecto1" > 

    <h1 class="proyectosTitle" style="font-size:20px" >Proyectos</h1>
          <v-divider color="blue" class="divider" ></v-divider>
<PmProyectoMobile1/>
          <v-divider color="blue" class="divider" ></v-divider>
<PmProyectoMobile2/>
           <v-divider color="blue" class="divider" ></v-divider>
<PmProyectoMobile3/>
           
</v-container>
    </div>
</template>

<script>
     import PmProyectoMobile1 from '@/components/proyectos-mobile/ProyectoMobile1.vue'
     import PmProyectoMobile2 from '@/components/proyectos-mobile/ProyectoMobile2.vue'
     import PmProyectoMobile3 from '@/components/proyectos-mobile/ProyectoMobile3.vue'
    export default {
        components:{
            PmProyectoMobile1,
            PmProyectoMobile2,
            PmProyectoMobile3,
        }
        
    }
</script>

<style lang="scss"  >
.titleListMobile{
    color: #4200FF;
    margin-bottom: 5px;
}
</style>