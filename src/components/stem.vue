<template>
    <v-container>
        <v-container grid-list-lg>
            <v-layout column>
                <v-flex
                    class="display-2 font-weight-black purple--text text-xs-center my-5"
                    >STEM predmeti</v-flex
                >
                <v-flex>
                    <div class="headline mt-3 purple--text font-weight-bold">
                        INFORMATIKA
                    </div>
                    <p class="subheading mt-3">
                        Informatika je predmet čije je gradivo dosta pokriveno
                        virtualnim laboratorijima. Uspješno pronalazimo mnoge
                        online kompajlere iz svih programskih jezika, alate za
                        učenje prevođenja brojeva iz jedne baze u drugu,
                        provođenje aritmetičkih operacija te alate za
                        minimizaciju i slaganje logičkih sklopova. U nastavku
                        slijedi pregled pronađenih alata.
                    </p>
                    <p>Kompajleri za programske jezike</p>
                    <p>
                        Postoji mnogo online kompajlera, no svi oni nude
                        manje-više isto samo imaju izgledom drugačije korisničko
                        sučelje. Poredani su subjektivno od boljih prema
                        lošijim. Svi su oni na engleskom jeziku, no intuitivni
                        su za korištenje.
                    </p>
                    <p>HTML</p>
                    <ul>
                        <li>
                            <a
                                href="https://www.onlinegdb.com/online_html_compiler"
                                >Onlinegdb - html</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.tutorialspoint.com/online_html_editor.php"
                                >Tutorialspoint.com - html</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.w3schools.com/tryit/tryit.asp?filename=tryhtml_hello"
                                >w3schools - html</a
                            >
                            - (osim kompajlera nudi kvizove, primjere, zadatke
                            za vježbanje i lekcije za učenje na engleskom
                            jeziku)
                        </li>
                        <li>
                            <a href="https://onecompiler.com/html"
                                >Onecompiler - html</a
                            >
                        </li>
                    </ul>
                    <p></p>
                    <p>C</p>
                    <ul>
                        <li>
                            <a
                                href="https://www.onlinegdb.com/online_c_compiler"
                                >Onlinegdb - c</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.programiz.com/c-programming/online-compiler/"
                                >Programiz - c</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.tutorialspoint.com/compile_c_online.php"
                                >Tutorialspoint - c</a
                            >
                        </li>
                    </ul>
                    <p></p>
                    <p>Python</p>
                    <ul>
                        <li>
                            <a
                                href="https://www.onlinegdb.com/online_python_compiler"
                                >Onlinegdb - python</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.programiz.com/python-programming/online-compiler"
                                >Programiz - python</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.tutorialspoint.com/execute_python_online.php"
                                >Tutorialspoint - python</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.w3schools.com/python/python_compiler.asp"
                                >w3schools - python</a
                            >
                            - (osim kompajlera nudi kvizove, primjere, zadatke
                            za vježbanje i lekcije za učenje na engleskom
                            jeziku)
                        </li>
                    </ul>
                    <p></p>
                    <p>
                        Kalkulator za prevođenje brojeva iz jedne brojevne baze
                        u drugu
                    </p>
                    <ul>
                        <li>
                            <a href="https://e.udzbenik.hr/odr/konverter/"
                                >e.udzbenik konverter</a
                            >
                            - Kalkulator nudi pretvorbe brojeva između
                            heksadekadkse, binarne, oktalne i dekadske baze.
                            Omogućava odabir više baza i računa pretvorbu iz
                            jedne baze u sve ostale odabrane baze. Decimalni
                            brojevi nisu mogući.
                        </li>
                        <li>
                            <a
                                href="https://www.rapidtables.com/convert/number/base-converter.html"
                                >rapidtable base-converter</a
                            >
                            - Kalkulator nudi mogućnost pretvorbe brojeva između
                            mnogih baza podataka, uključujući, ne samo osnove
                            (2, 8, 10, 16) što je super za one koji žele znati
                            više. Na engleskom jeziku je, ali je jednostavan za
                            korištenje. Prikazuje i postupak.
                        </li>
                        <li>
                            <a
                                href="https://www.periodni.com/hr/pretvaranje_brojevnih_sustava.html"
                                >periodni pretvaranje_brojevnih_sustava</a
                            >
                            - Pretvaranje decimalnog broja u heksadekadski
                            (binarni, oktalni, ...) i obrnuto.
                        </li>
                    </ul>
                    <p></p>
                    <p>
                        Kalkulator za zbrajanje, oduzimanje, množenje i
                        dijeljenje
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://www.rapidtables.com/calc/math/base-calculator.html"
                                >rapidtables base-calculator</a
                            >
                            - Omogućava jednostavne operacije kao što su
                            zbrajanje, oduzimanje, množenje i dijeljenje u
                            mnogim brojevnim bazama.
                        </li>
                        <li>
                            <a
                                href="https://hr.calcprofi.com/binarni-brojevi-kalkulator.html"
                                >calcprofi binarni-brojevi-kalkulator</a
                            >
                            - Binarni kalkulator, jednostavan i intuitivan za
                            korištenje.
                        </li>
                    </ul>
                    <p></p>
                    <p>Logički izrazi i sklopovi, minimizacija</p>
                    <ul>
                        <li>
                            <a href="https://www.boolean-algebra.com/"
                                >boolean-algebra</a
                            >
                            - Minimizira uneseni logički izraz te prikazuje
                            postupak korak po korak, tablicu istinitosti te
                            logički sklop koji predstavlja početni i
                            minimizirani logički izraz. Nudi i kviz za provjeru
                            gradiva. Na engleskom jeziku je, ali je jednostavan
                            za korištenje i razumljiv.
                        </li>
                        <li>
                            <a
                                href="https://www.emathhelp.net/en/calculators/discrete-mathematics/boolean-algebra-calculator/"
                                >emathhelp boolean-algebra-calculator</a
                            >
                            - Minimizira uneseni logički izraz te prikazuje
                            postupak korak po korak. Na engleskom jeziku je, ali
                            je jednostavan za korištenje i razumljiv.
                        </li>
                        <li>
                            <a
                                href="https://academo.org/demos/logic-gate-simulator/"
                                >academo logic-gate-simulator</a
                            >
                            - Alat omogućava spajanje logičkih sklopova da se
                            vidi kako se ponašaju kada su spojeni na različite
                            ulaze i izlaze. Upute su na engleskom jeziku, no
                            alat je vrlo koristan i kvalitetan.
                        </li>
                        <li>
                            <a
                                href="https://www.wolframalpha.com/examples/mathematics/logic-and-set-theory/boolean-algebra/"
                                >wolframalpha boolean-algebra</a
                            >
                            - Wolfram Alpha radi s Booleovom algebrom tako što
                            izračunava tablice istine, pronalazi normalne
                            oblike, konstruira logičke sklopove i još mnogo
                            toga. Na engleskom jeziku. Odličan alat za
                            vizualizacije i provjeru rješenja.
                        </li>
                    </ul>
                </v-flex>

                <v-flex>
                    <div class="headline mt-3 purple--text font-weight-bold">
                        MATEMATIKA
                    </div>
                    <p class="subheading mt-3">
                        Matematika je jedan od predmeta koji nudi mnoštvo
                        virtualnih laboratorija za učenje. Svakako preporučujemo
                        da proučite i iskoristite alate kao što su GeoGebra i
                        Wolfram Alpha jer nude širok spektar mogućnosti i
                        rješavaju velik broj matematičkih problema u srednjoj
                        školi. Uz navedena 2 alata naveli smo i stranice koje
                        nude mnogo virtualnih laboratorija iz matematike
                        svrstanih po područjima gdje lako možete pronaći što vam
                        treba.
                    </p>
                    <p>Općeniti alati</p>
                    <ul>
                        <li>
                            <a href="https://www.geogebra.org/">Geogebra</a> -
                            Interaktivna aplikacija za geometriju, algebru,
                            statistiku i račune, namijenjena učenju i
                            podučavanju matematike i znanosti. Nudi mnoštvo
                            vizualizacija grafovima i tablicama, računanje,
                            kalkulator i ostale funkcionalnosti potrebne za
                            uspješno savladavanje matematike. Na engleskom
                            jeziku je. Jedan od sveobuhvatnih alata za učenje
                            matematike jer nudi široki spektar mogućnosti.
                            Svakako predlažemo da za svaku lekciju provjerite
                            što nudi aplikacija i kako vam to može pomoći u
                            nastavi.
                        </li>
                        <li>
                            <a
                                href="https://www.wolframalpha.com/examples/mathematics/"
                                >Wolfram Alpha mathematics</a
                            >
                            - Wolfram Alpha je znanstvena tražilica koja za
                            razliku od klasičnih tražilica tipa Google, pomoću
                            ugrađenih algoritama pokušava odgovoriti na vaš upit
                            odnosno pitanje iz domene matematike, ali i nekih
                            drugih predmeta. Rješava mnoge matematičke probleme,
                            diferencijalne jednadžbe, algebarske zadatke,
                            zadatke riječima, probleme iz statistike,
                            geometrije, trigonometrije i još mnogo toga. Nudi
                            mnoštvo vizualizacija grafovima i tablicama,
                            računanje, crtanje funkcija, kalkulator i ostale
                            funkcionalnosti potrebne za uspješno savladavanje
                            matematike. Snalaženje je vrlo jednostavno te
                            svakako preporučujemo da isprobate mogućnosti koje
                            nudi. Također, alat nudi i mnogo primjera iz svih
                            područja, objašnjava na koji način možete
                            pretraživati i dobivati rezultate. Jedan od
                            sveobuhvatnih alata za učenje matematike jer nudi
                            široki spektar mogućnosti.
                        </li>
                        <li>
                            <a
                                href="https://www.golabz.eu/labs?subject_domain=602"
                                >Golabz</a
                            >
                            - Mnoštvo virtualnih laboratorija za učenje
                            matematike. Mogućnost postavljanja filtera za
                            hrvatski jezik, no tada puno manji broj dostupnih
                            laboratorija. Predlažemo da postavite filter na
                            gradivo koje vas zanima i uzrast za koji je
                            namijenjeno. Stranica je na engleskom jeziku.
                        </li>
                        <li>
                            <a
                                href="https://phet.colorado.edu/en/simulations/filter?subjects=math&levels=high-school&type=html&sort=alpha&view=grid"
                                >Phet - simulations</a
                            >
                            - Mnoštvo simulacija za učenje. Mogućnost
                            postavljanja filtera na hrvatski jezik, no tada puno
                            manji broj dostupnih simulacija. Postavljen filter
                            da se prikazuje gradivo samo za srednje škole.
                            Stranica je na engleskom jeziku.
                        </li>
                        <li>
                            <a
                                href="https://cm.pg.edu.pl/en/e-learning/virtual-math-lab"
                                >Virtual-math-lab</a
                            >
                            - Virtualni laboratoriji za crtanje u 2D i 3D
                            prostoru, pronalazak inverza, računanje derivacija,
                            integrala…
                        </li>
                    </ul>
                    <p></p>
                    <p>Online znanstveni kalkulator</p>
                    <ul>
                        <li>
                            <a
                                href="https://hr.calcprofi.com/znanstveni-kalkulator.html"
                                >calcprofi znanstveni-kalkulator</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.geogebra.org/scientific?lang=hr"
                                >Geogebra.org - scientific calculator</a
                            >
                        </li>
                    </ul>
                </v-flex>

                <v-flex>
                    <div class="headline mt-3 purple--text font-weight-bold">
                        FIZIKA
                    </div>
                    <p class="subheading mt-3">
                        Fizika je jedan od predmeta koji nudi mnoštvo virtualnih
                        laboratorija za učenje. Svakako preporučujemo da
                        proučite tražilicu Wolfram Alpha jer nudi širok spektar
                        mogućnosti i rješava mnoge probleme iz fizike u srednjoj
                        školi. Također, naveli smo i stranice koje nude mnogo
                        virtualnih laboratorija iz fizike svrstanih po
                        područjima gdje lako možete pronaći što vam treba.
                    </p>
                    <p>Općeniti alati</p>
                    <ul>
                        <li>
                            <a
                                href="https://phet.colorado.edu/en/simulations/filter?locale=hr&subjects=physics&levels=high-school&type=html&sort=alpha&view=grid"
                                >Phet - simulation</a
                            >s - Mnoštvo simulacija za učenje. Mogućnost
                            postavljanja filtera za hrvatski jezik, no tada puno
                            manji broj dostupnih simulacija. Postavljen filter
                            da se prikazuje gradivo samo za srednje škole. Na
                            engleskom jeziku.
                        </li>
                        <li>
                            <a
                                href="https://www.wolframalpha.com/examples/science-and-technology/physics/"
                                >Wolfram Alpha physics</a
                            >
                            - Wolfram Alpha je znanstvena tražilica koja za
                            razliku od klasičnih tražilica tipa Google, pomoću
                            ugrađenih algoritama pokušava odgovoriti na vaš upit
                            odnosno pitanje iz domene fizike, ali i nekih drugih
                            predmeta. Rješava mnoge probleme iz mehanike,
                            termodinamike, optike, magnetizma, valova i mnogih
                            drugih tema. Nudi mnoštvo vizualizacija grafovima i
                            tablicama, postupke, kalkulator i ostale
                            funkcionalnosti potrebnih za uspješno razumijevanje
                            fizike. Snalaženje je vrlo jednostavno te svakako
                            preporučujemo da isprobate mogućnosti koje nudi.
                            Također, alat nudi i mnogo primjera iz svih područja
                            na koji način možete pretraživati i dobivati
                            rezultate.
                        </li>
                        <li>
                            <a
                                href="https://www.golabz.eu/labs?subject_domain=664"
                                >Golabz</a
                            >
                            - Mnoštvo virtualnih laboratorija za učenje.
                            Mogućnost postavljanja filtera za hrvatski jezik, no
                            tada puno manji broj dostupnih laboratorija.
                            Predlažemo da postavite filter na gradivo koje vas
                            zanima i uzrast za koji je namijenjeno. Na engleskom
                            jeziku.
                        </li>
                    </ul>
                    <p></p>
                    <p>Online znanstveni kalkulator</p>
                    <ul>
                        <li>
                            <a
                                href="https://hr.calcprofi.com/znanstveni-kalkulator.html"
                                >calcprofi znanstveni-kalkulator</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.geogebra.org/scientific?lang=hr"
                                >Geogebra.org - scientific calculator</a
                            >
                        </li>
                    </ul>
                </v-flex>

                <v-flex>
                    <div class="headline mt-3 purple--text font-weight-bold">
                        KEMIJA
                    </div>
                    <p class="subheading mt-3">
                        Za kemiju su dostupni i virtualni laboratoriji i
                        simulacije. Virtualni laboratoriji omogućuju izvođenje
                        pokusa, većinom nudeći mogućnost kombiniranja različitih
                        reaktanata i uvjeta kemijske reakcije. Na kraju daju
                        rezultate reakcije. Simulacije prikazuju postupke i
                        pojave.
                    </p>
                    <p>Laboratoriji</p>
                    <ul>
                        <li>
                            <a
                                href="https://www.sciencebysimulation.com/chemreax/Analyzer.aspx"
                                >Chemreax</a
                            >
                        </li>
                        <li>
                            <a href="http://chemcollective.org/vlabs"
                                >Chemcollective</a
                            >
                        </li>
                        <li>
                            <a href="https://www.msichicago.org/play/goreact/"
                                >GoReact</a
                            >
                        </li>
                    </ul>
                    <p></p>
                    <p>Simulacije</p>
                    <ul>
                        <li>
                            <a
                                href="https://phet.colorado.edu/en/simulations/filter?subjects=general&sort=alpha&view=grid"
                                >PHet Colorado - kemija</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.golabz.eu/labs?subject_domain=298"
                                >Golabz - kemija</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.golabz.eu/labs?subject_domain=298"
                                >Labster - kemija</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://interactives.ck12.org/simulations/chemistry.html?referrer=simulation&simulationName=intermolecular-forces"
                                >Interactive simulations - chemistry</a
                            >
                        </li>
                        <li>
                            <a href="http://billvining.com/mmlib_sims/#gen"
                                >Billvining</a
                            >
                        </li>
                    </ul>
                    <p></p>
                    <p>Online znanstveni kalkulator</p>
                    <ul>
                        <li>
                            <a
                                href="https://hr.calcprofi.com/znanstveni-kalkulator.html"
                                >calcprofi znanstveni-kalkulator</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.geogebra.org/scientific?lang=hr"
                                >Geogebra.org - scientific calculator</a
                            >
                        </li>
                    </ul>
                </v-flex>

                <v-flex>
                    <div class="headline mt-3 purple--text font-weight-bold">
                        BIOLOGIJA
                    </div>
                    <p class="subheading mt-3">
                        Iako postoje virtualni laboratoriji, za biologiju su
                        puno češće simulacije koje prikazuju biološke procese. U
                        nastavku teksta su linkovi na stranice sa simulacijama i
                        desktop aplikaciju za virtualni laboratorij genetike.
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://phet.colorado.edu/en/simulations/filter?subjects=biology&type=html&sort=alpha&view=grid"
                                >Phet Colorado - biologija</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.labxchange.org/library?t=ItemType%3Asimulation&page=1&size=24&order=relevance"
                                >Labxchange - biologija</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.golabz.eu/labs?subject_domain=185"
                                >Golabz - biologija</a
                            >
                        </li>
                        <li>
                            <a href="http://star.mit.edu/genetics/index.html"
                                >Star genetic</a
                            >
                            - Desktop aplikacija za učenje genetike
                        </li>
                    </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'stem',
};
</script>

<style scoped></style>
