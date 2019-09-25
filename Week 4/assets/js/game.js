alert('Welkom bij mijn keuze game!!(14+)');

name = prompt('Vul je naam in');

alert('welkom ' + name + ', leuk dat je deze game speelt');
answer = prompt('Hoe oud ben je?');
if(answer >= 14) {

    alert('Je bent oud genoeg om deze game te spelen!')    
    answer = prompt('Kies de goede keuze Keuze \n Type (1) Ga naar de stad waar weinig monsters zijn \n Type (2) Ga naar het platteland waar veel monsters zijn ');
}
    if(answer == 2) 

{
alert('Je werd ingesloten door de monsters \n Je bent dood!!'); 
location.reload();
}
 else{
answer = prompt('Je bent in de stad en wordt gevolgd door een paar monsters \n Type (1) Ren weg en spring in de rivier \n Type (2) Ren naar binnen in een huisje');
if (answer == 1)
{
alert('Je probbeerde weg te zwemmen maar werd gebeten door een goudvis \n Je bent dood!!');
location.reload();
}
 else{
answer = prompt('Je bent in het huisje en doet de deur dicht, Het is verschrikkelijk donker \n Type (1) roep om hulp \n Type (2) Neem stiekem de achterdeur')
if (answer == 1)
{
alert('Je riep om hulp maar niemand kwam, je verhongerde en gaat dood \n Je bent dood!!')
location.reload();

}
else{
answer = prompt('Je loopt Stil uit het huis, je komt een groep mensen tegen\n Type (1) probeer de groep mensen te verwonden \n Type (2) Ga samenwerken met de mensen om de zombies te verslaan')
if (answer == 1)
{  alert('je probeerdde de groep te verwonden maar ze waren te sterk, je werd vermoord door de groep\n Je bent dood!!') 
location.reload();

}  
else{
answer = prompt('Er komen monsters aan, de groep geeft je snel eten en een wapen\n Type (1) Voor een pistool \n Type (2) voor een mes')
if (answer == 1)
{
alert("Aan een pistool zonder kogels heb je niks, je probbeerde weg te rennen maar werd gepakt door de monsters\n je bent dood")
location.reload();

 }
else{
alert('Je steekt alle monsters neer. Daarna besluit je met je groep om terug te gaan naar het huis')
answer = prompt('De volgende ochtend zijn jullie Yordi iemand van de groep kwijt\n Type (1) Om in het huis te blijven \n Type (2) om Yordi te zoeken')
if (answer == 1)
{
alert("Tuurlijk ga je je vriend zoeken, Je hebt spijt van je keuze en besluit om zelfmoord te plegen \n Je bent dood!!")
location.reload();
}
else{ 
answer = prompt('je ziet voetsporen naar het bos en rivier gaan. Wat kies je?\n Type (1) om naar het bos te gaan \n Type (2) om naar de rivier te gaan')
if (answer == 2)
{
alert('je kan niks vinden bij de rivier, Jullie willen terug naar huis gaan maar worden aangevallen door monsters en jullie gaan dood\n Je bent dood!!')
location.reload();
 }
        
else{
answer = prompt('Jullie zijn aan het zoeken in het bos, De voetsporen gaan naar rechts. Rechts staan allemaal monsters, wat ga je doen?\n Type (1) Volg het spoor en vecht tegen de monsters\n Type (2) Om het spoor niet te volgen en op een andere manier lang de monsters te komen');
if (answer == 1)

{
alert('jullie vechten voor je leven maar jullie kogels raken op en komen te overlijden\n Je bent dood!!');
location.reload();
}

else{
alert('Jullie zoeken door heel het bos maar komen Yordi niet tegen. Oppeens horen jullie geschreeuw naast jullie. Jullie besluiten om er naar toe te gaan.')
alert('Jullie zien Yordi daar liggen, je helpt hem omhoog en geeft hem wat eten en brengt hem naar huis. Als jullie thuis aangekomen zijn zegt jordie: We moeten nog 3 monsters verslaan en dan is het klaar')
answer = prompt('Jullie gaan de monsters verslaan, Maar met welk wapen? \n Type (1) voor een mes \n Type (2) voor een pistool (Deze keer met kogels)')
if (answer == 1)

{
 alert('het mes is niet sterk genoeg dus jullie sterven \n Je bent dood!!') 
 location.reload();  
}

else{
    answer = prompt('je hebt de monsters verslagen!! gefeliciteerd met je overwinning!!! Hoe vond je deze game? \n Type (1) Super goed spel! \n Type (2) Super slecht spel!')
    if (answer == 2)
{
alert('Jammer dat je spel niet goed vond! Daarom mag je weer opnieuw beginnen!')
location.reload();
}

else{
    alert('Uitgespeeld');

     }



}
}  
        }
}
} 
          }
      }
   }
}


