<template>
    <div>
        <form>
            <input type="text" placeholder="Username" v-model="username">
            <input type="password" placeholder="password"v-model="password">
            <button type="submit"v-on:click="performLogin">Login</button>
        </form>
        <p>Username={{ username }}</p>
        <p>Password={{ password }}</p>
        <div>votre identifiant:<strong></strong></div>

    </div>
</template>

<script>

export default{
data(){
return{
    username:"",
    password:"",
}
},
methods:{
    performLogin
}
}
</script>

<style scoped></style>