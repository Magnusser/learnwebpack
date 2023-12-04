<template>
    <ul class="nav nav-tabs">
        <li class="nav-item" v-for="route in $router.getRoutes()">
            <RouterLink class="nav-link" :to="route.path" activeClass="active">{{ route.name }}</RouterLink>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>