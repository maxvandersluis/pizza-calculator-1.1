  //vraagt naar hoeveel pizzas je wilt
   var small = prompt("hoeveel small pizzas wilt u? ($8.00)", "");
   var medium = prompt("hoeveel medium pizzas wilt u? ($10.00)", "");
   var large = prompt("hoeveel large pizzas wilt u? ($12.00)", "");
      
   //prijzen
   const psmall = 7.50;
   const pmedium = 10.00;
   const plarge = 12.50;

   //laat zien  hoeveel van elk soor pizzas is besteld
   document.write('hoeveelheid small pizzas besteld: ' + small + '<br></br>');
   document.write('hoeveelheid medium pizzas besteld: ' + medium + '<br></br>');
   document.write('hoeveelheid large pizzas besteld: ' + large + '<br></br>');
   document.write('--------------------------------------------------' + '<br></br>');

   //laat de totale prijzen zien van elke soort bestelde pizza
   document.write('totale prijs van alle small pizzas = $ ' + psmall*small + '<br></br>');
   document.write('totale prijs van alle medium pizzas = $ ' + pmedium*medium + '<br></br>');
   document.write('totale prijs van alle large pizzas = $ ' + plarge*large + '<br></br>');
   
   //berekent de totale prijs van alle pizzas bij elkaar
   var totale =(psmall*small+pmedium*medium+plarge*large);
   document.write('--------------------------------------------------' + '<br></br>');
   
   //totale prijs van bestelde aantal pizzas
   document.write('totale prijs van alle pizzas = $ ' + totale + '<br></br>');
   document.write('--------------------------------------------------' + '<br></br>');

     