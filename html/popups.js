const popupTexts = ["Du bist die Brandmauer gegen Rechts",'"Unpolitisch" ist politisch',"Die AfD ist die mit Abstand größte Gefahr für unsere Gesellschaft! #AfDVerbotJetzt","Sich an Antifaschismus stören ist so 1933","Dieser Service wird nicht von Faschisten finanziert","Menschenrechte statt rechte Menschen","Kein Mensch ist illegal",'"Nie wieder" ist immer, nicht nur alle 4 Jahre beim Kreuzchen machen',"Kein Platz für Rassismus","Trans rights are human rights","Trans rights or riot nights","Die Brandmauer ist überall. Auch auf der Drehscheibe!","#BahnhofottosAntifa","Nazis morden, der Staat schiebt ab – das ist das gleiche Rassistenpack","AfDler verpisst euch – keiner vermisst euch","Seenotrettung ist kein Verbrechen","Nein heißt Nein, No means No, wer das sagt der meints auch so"]

function showPopup(){
    const popup = document.getElementById('popup');
    const randomIndex = Math.floor(Math.random() * popupTexts.length);
    popup.innerText = popupTexts[randomIndex];
    popup.style.visibility = 'visible';
    popup.style.opacity = 1;
    setTimeout(() => {
        popup.style.visibility = 'hidden';
        popup.style.opacity = 0;
    }, 5000);
}

window.onload = function() {
    showPopup();
};