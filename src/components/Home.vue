<template>
    <v-container fluid fill-height class="home" style="max-height: 100vh">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">
                Virtualni laboratoriji
            </div>
            <div class="display-1 font-weight-bold black--text text-xs-center">
                Učenje kroz virtualne laboratorije i simulacije.
            </div>
            <p class="subheading mt-3">
                U današnje vrijeme Internet je prepun informacija koje nam
                olakšavaju učenje i proces učenja čine zanimljivijim. Možemo
                pronaći brojne alate za provjeru znanja, ilustracije,
                simulacije, videa, digitalne udžbenike, igrice za učenje i još
                mnogo toga, no ponekad se je teško snaći u toj šumi podataka i
                izgubimo želju za pronalaskom kvalitetnog sadržaja jer je za to
                potrebno uložiti vrijeme.
            </p>
            <p></p>
            <p></p>
            <v-btn
                fluid
                class="purple lighten-4 hidden-sm-and-down nav-textbook"
                flat
                to="/textbook"
                data-cy="menuBtn"
                >.pdf udžbenik</v-btn
            >
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>
.home {
    background: white;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
