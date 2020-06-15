let quotes = new Array();

quotes = [`" Don't wait for opportunity. Create it. "`, "",
            `" Life isn't about finding yourself. It's about creating yourself. "`, "",
            `" Never stop doing your best just because someone doesn't give you credit. "`, "",
            `" When you're about to quit, remember why you started. "`, "",
            `" Life is a journey to be experienced, not a problem to be solved. "`, "Winnie the Pooh",
            `" The most dangerous thing you can do in life is play it safe "`, "Casey Neistat",
            `" Imagination is more important than knowledge.<br> Knowledge is limited. Imagination encircles the world. "`, "Albert Einstein",
            `" Everyone is a genius. But if you judge a fish by its ability to climb a tree, <br> it will live its whole life believing that it is stupid. "`, "Albert Einstein",
            `" You don't need directions. Just point yourself to the top and go. "`, 'Dwayne "The Rock" Johnson',
            `" Ez az álmaim ihlette valóságom, <br> és bár a valósággal az a gáz, hogy nincsen hozzá háttérzene... "`, "Saiid",
            `" Láttam, ahogy engem kutatsz, de csak magadat látod, <br> mert nem jössz elég közel. "`, "Saiid",
            `" But instead of feeling sorry for yourself <br> Do something 'bout it "`, "Eminem",
            `" And this is real talk, I feel like The Incredible Hulk <br> My back has been broke and I can still walk "`, "Eminem",
            `" If you're going through hell, keep going. "`, "Winston Churchill",
            `" The truth is, everyone is going to hurt you. <br> You just got to find the ones worth suffering for. "`, "Bob Marley",
            `" Some people feel the rain, others just get wet. "`, "Bob Marley",
            ];

function randomInt(max){
   return Math.floor(Math.random() * Math.floor(max)) * 2;
}

function show(){
   let randNum = randomInt(16);
   document.getElementById("quotes").innerHTML = quotes[randNum];
   document.getElementById("author").innerHTML = quotes[randNum + 1];
}

show();
setInterval(show, 300000); //5p
