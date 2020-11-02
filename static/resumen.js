Vue.component('tarjeta-resumen',{
    data:function(){
        return {
            datos=[]       
        }
    },
    template: '<div class="contenedor">'+
              '<div v-for="datito for datos">{{ datito.nombre }}</div>'+
              '<div v-for="datito for datos">{{ datito.contenido }}</div>'+
              '</div>'
})
const app = new Vue({
    el:'#resumen'
})