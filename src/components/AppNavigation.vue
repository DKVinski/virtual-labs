<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="purple lighten-2"
            dark
            disable-resize-watcher
        >
        </v-navigation-drawer>
        <v-toolbar app color="purple darken-4" dark>
            <router-link to="/">
                <v-toolbar-title data-cy="titleBtn">{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <v-btn flat class="nav-stem" to="/stem" data-cy="menuBtn"
                >STEM predmeti</v-btn
            >
            <v-btn flat class="nav-social" to="/social" data-cy="menuBtn"
                >Društveni predmeti</v-btn
            >
            <v-btn
                flat
                class="nav-development"
                to="/development"
                data-cy="menuBtn"
                >Daljnji razvoj</v-btn
            >
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Virtualni laboratoriji',
            drawer: false,
            items: [
                { title: 'STEM predmeti', url: '/stem' },
                { title: 'Društveni predmeti', url: '/social' },
            ],
        };
    },
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
