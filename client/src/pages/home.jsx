import React, { useEffect } from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';
import { getProducts } from '../services/api';



const Home = () => {

    const homeStyle = {
        
        backgroundImage: "url('https://media-beta.romaniatv.net/unsafe/1020x574/smart/filters:contrast(5):format(webp):quality(92)/https://www.economica.net/wp-content/uploads/2015/03/dunarea_la_braila_33431600.jpg')",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover",
        height: "100%",
        maxHeight: "90vh",
        overflow: "auto",
        color: "whitesmoke",
        fontWeight: "600",
        textShadow: "2px 3px 3px black",
        padding: "3rem"
    }


    return (
        <div style={homeStyle}>
            <p>Braila devenise in prima jumatate a secolului trecut un adevarat Europolis la portile orientului. Un recensamant al populatiei din 1891 arata ca in Braila numai 64,5% erau romani (30.277 locuitori), restul populatiei fiind reprezentata in proportii de: 9,1% greci (4238 locuitori); 3,8% unguri (1785 locuitori); 2,1% bulgari (978 locuitori); 1,5% izraeliti (708 locuitori) si in procente mai mici austrieci, germani, turci, rusi, italieni,sarbi, francezi, englezi, elvetieni, rromi, macedonieni, albanezi, tatari etc…
                Viata economica era dominata de familii de comercianti italieni, greci, armeni si evrei. Marfa proaspata din piata de peste era asigurata de pescari lipoveni. Erau nenumarate cofetarii si cafenele turcesti.
                Producatorii macedoneni de produse lactate isi negociau marfa in plina strada.
            </p>
            <p>Lautarii tigani isi etalau maiestria in carciumile din port, intesate de marinari de pe toate continentele.
                Ca sa nu mai vorbim despre cele peste 400 de stabilimente cu felinar rosu, care au dus peste hotare faima orasului  lui „tanti Elvira „.
                In imediata vecinatate a acestei promiscuitati portuare, in cladirea teatrului dramatic, si astazi una dintre cele mai frumoase constructii ce  gazduiesc  spectacole in Romania, dadeau la inceput de secol XX reprezentatii de inalta tinuta artistica, faimoase orchestre simfonice si trupe celebre de opera si de teatru de pe batranul continent.
            </p>
            <p>Toata aceasta efervescenta economica, sociala si culturala, nemaintalnita la sfarsit de secol XIX si inceput de secol XX in alta asezare din Regatul Romaniei, a fost consecinta unei infloriri economice de mare dinamism intre 1830 si 1914, care a facut ca la Braila sa functioneze incepand cu 1882 Bursa de cereale a Europei.

                Datorita importantei geografice si economice, Braila a capatat statutul international de „Porto Franco „, cu 3 zone de comert liber, astfel incat in 1911 schimbul vamal al Romaniei in portul Braila insemna 20% din total import si 22% din total export.Ca sa ne dam seama de consecintele acestui boom economic, demn de remarcat este faptul ca la Braila in perioada antebelica au functionat 6 consulate, 7 viceconsulate, 17 banci, 4 institutii de asigurari maritime si peste 20 de societati si agentii de navigatie romanesti si straine.
                Urmari inerente au avut loc si in modernizarea orasului: primul tramvai electric si primul oras iluminat electric din Romania (la ambele capitole urmeaza dupa Timisoara care la acea vreme era in Austro-Ungaria).
            </p>
            <p>
                La Braila, in perioada antebelica si interbelica se desfasoara o intensa viata culturala si stiintifica, cu nimic mai prejos, de pilda, fata de cea din Bucurestiul sau din Iasii acelor vremuri.

                Braila, descrisa de Mihail Sebastian drept „orasul cu salcami si fete frumoase” este totodata si orasul Chirei Chiralina si a lui Codin, doua dintre personajele lui Panait Istrati, care este considerat cel mai citit scriitor roman in lumea francofona.

                Legatura dintre oras si fluviul Dunarea, dar mai ales intre oras si Balta Brailei a fost permanenta. Atmosfera si personajele descrise de Panait Istrati si Fanus Neagu sunt elocvente.

                Sa nu uitam ca in imediata vecinatate a orasului, in stufarisurile salbatice si in padurile intunecate de pe cele 150.000 de ha de balta, isi amenajase nenumarate adaposturi haiducul Terente.
            </p>
            <p>
                Mutatiile profunde geopolitice generate de Primul Razboi Mondial au determinat o prabusire sociala si economica a civilizatiei brailene.
                In prezent, Braila traieste povestea tragica a multor orase din Romania. Economia s-a redus considerabil, iar viata socio-culturala nu se mai ridica la inaltimea celei de la inceputul secolului XX.
                Farmecul de altadata se mai pastreaza doar in acele cladiri venerabile construite in acea perioada si in ceea ce a mai ramas din Balta Brailei…
            </p>
        </div>
    )
}

export default Home;

