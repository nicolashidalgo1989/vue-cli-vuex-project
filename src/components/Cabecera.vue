<template>
    <div> 
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1>{{ titulo }}</h1>
    </div>
</template>
<script>
export default{
    name: 'Cabecera',
    props:{
        titulo: String
    }
}
</script>
