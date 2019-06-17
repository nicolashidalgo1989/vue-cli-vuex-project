<template>
    <div>
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <ul class="list-group mb-5 bg-dark">
                    <li @click="aumentar(indice)" v-for="(item,indice) of arrayOrdenado" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                        {{ indice + 1}} - {{ item.nombre }}
                        <span class="badge badge-success badge-pill"> {{ item.cantidad }} </span>
                    </li> 
                </ul>
            </div>
        </div>
        <button class="btn btn-danger" @click="reiniciar">Reiniciar</button>
    </div>
</template>
<script>

import {mapState, mapMutations} from 'vuex';

export default{
    name: 'Lista',
    computed: {
        ...mapState(['stock']),
        arrayOrdenado(){ 
            return this.stock.sort( (a,b) => b.cantidad - a.cantidad);
        }
    },
    methods: {
        ...mapMutations(['aumentar','reiniciar'])
    }
}
</script>
<style scoped>
.list-group li{
    background:black!important;
}

</style>
