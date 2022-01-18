<template>
    <div>
        <pdf
            v-for="i in numPages"
            :key="i"
            :src="src"
            :page="i"
            style="display: inline-block; width: 25%"
        ></pdf>
    </div>
</template>

<script>
import pdf from 'vue-pdf';

var loadingTask = pdf.createLoadingTask('../assets/udžbenik.pdf');

export default {
    name: 'Textbook',
    components: {
        pdf,
    },
    data() {
        return {
            src: loadingTask,
            numPages: undefined,
        };
    },
    mounted() {
        this.src.promise.then((pdf) => {
            this.numPages = pdf.numPages;
        });
    },
};
</script>

<style scoped></style>
