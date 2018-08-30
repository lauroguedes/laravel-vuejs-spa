<template>
    <div class="home">
        <h1>Home</h1>
        <ul>
            <li><router-link :to="{ name: 'admin' }">Admin</router-link></li>
            <li><router-link :to="{ name: 'admin' }">Client</router-link></li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    export default {}
</script>