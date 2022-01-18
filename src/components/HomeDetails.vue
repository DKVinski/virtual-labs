<template>
    <v-container fluid class="purple lighten-4">
        <v-container grid-list-lg>
            <v-layout column>
                <v-flex
                    class="display-2 font-weight-black purple--text text-xs-center my-5"
                    >O virtualnim laboratorijima</v-flex
                >
                <v-flex>
                    <p class="subheading mt-3">
                        Virtualni laboratorij predstavlja računalnu simulaciju
                        fizičkog laboratorija koja oponaša eksperimente i
                        scenarije s kojima se korisnici mogu susresti u stvarnom
                        svijetu. Također, virtualni laboratoriji mogu
                        predstavljati konstrukt nepostojećeg laboratorija za
                        koje ne postoji eksperiment koji bi bio ekvivalent tom
                        virtualnom laboratoriju u stvarnosti. Simulacije
                        virtualnih laboratorija se izvršavaju udaljeno na
                        serverima te se tijek simulacije i rezultat prikazuju
                        korisnicima.
                    </p>
                    <p class="subheading mt-3">
                        Za razliku od udaljenih laboratorija koji zapravo
                        provode stvarni eksperiment s udaljene lokacije, ovakvi
                        laboratoriji ne troše stvarne resurse za eksperimente.
                        Udaljeni laboratoriji omogućavaju stvarne rezultate, ali
                        iz razloga što imaju ograničen broj korisnika koji
                        istovremeno može sudjelovati, potrebno se unaprijed
                        predbilježiti za takve laboratorije i imati pristup
                        takvim laboratorijima jer to najčešće i košta.
                    </p>
                    <p class="subheading mt-3">
                        Zato imamo virtualne laboratorije koji omogućavaju
                        neograničenom broju korisnika, da bilo kad i bilo gdje
                        izvode eksperiment i provode istraživanje. Bilo da su to
                        u stvarnosti skupi, opasni ili pak nemogući eksperimenti
                        nema proporcionalnog troška.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails',
};
</script>

<style scoped></style>
