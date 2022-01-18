<template>
    <span>
        <home></home>
        <home-details></home-details>
    </span>
</template>

<script>
import Home from '@/components/Home';
import HomeDetails from '@/components/HomeDetails';

export default {
    name: 'HomeView',
    components: {
        Home,
        HomeDetails,
    },
};
</script>
