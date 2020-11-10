/*
Insertamos una serie de documentos en la colección coches
tendremos que hacer previamente un:
 use bd
 para posicionarlos o usar una base de datos concreta
*/
db.coches.insertMany([
 
{
    "Nombre":"Seat Ibiza MK2", 
    "peso": 895, 
    "cilindrada": 1391,
    "cv": 60, 
    "motor": [{"cilindros":"4 cilindros en línea" ,"combustible":"gasolina"}],
    "año de fabricacion": 1993 
},

{
    "Nombre":"Peugeot Partner", 
    "peso": 1407, 
    "cilindrada": 1560,
    "cv": 75, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"diesel"}],
    "año de fabricacion": 2006
},
{
    "Nombre":"Seat León II", 
    "peso": 1.365 , 
    "cilindrada": 1760,
    "cv": 180, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"diesel"}],
    "año de fabricacion": 2010
},
{
    "Nombre":"Seat Ibiza III", 
    "peso": 1170, 
    "cilindrada": 1598,
    "cv": 90, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"gasolina"}],
    "año de fabricación": 2011
},
{   
    "Nombre":"Seat 127",
    "cilindrada": 1010,
    "cv": 52, 
    "motor":  [{"cilindros":"3 cilindros en línea" ,"combustible":"gasolina"}],
     "año de fabricacion": 1974
},
{   
    "Nombre":"Peugeot 308",
    "cilindrada": 1560,
    "cv": 110, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"diesel"}],
     "año de fabricacion": 2008
},
{   
    "Nombre":"Hyundai Accent",
    "peso": 1035,
    "cilindrada": 1341,
    "cv": 85, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"gasolina"}],
     "año de fabricacion": 2004,
     
},

{   
    "Nombre":"Fiat 850 Coupé Sport",
    "peso": 750,
    "cilindrada": 903,
    "cv": 52, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"gasolina"}],
     "año de fabricacion": 1968,
     
},
{   
    "Nombre":"Simca 1000",
    "peso": 730,
    "cilindrada": 944,
    "cv": 42, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"gasolina"}],
     "año de fabricacion": 1972,
     
},
{   
    "Nombre":"Simca 1200",
    "peso": 977,
    "cilindrada": 1204,
    "cv": 80, 
    "motor":  [{"cilindros":"4 cilindros en línea" ,"combustible":"gasolina"}],
    "año de fabricacion": 1967,
     
}
    
 ]);
 db.coches.find() //Para que me muestre que todos los valores introducidos están bien.
 db.coches.find({$or:[{"motor.cilindros":"3 cilindros en línea"},{"motor.combustible":"gasolina"}]}) //Find para que me de los que tienen o motor tricilindrico o de gasolina
 db.coches.find( { "motor.combustible":"diesel", "cilindrada": { $gte: 1300 } } ) //Find para que me de los que tienen motor de diesel y de menos de 1300cc
 db.coches.find({"cv": {$gte: 70 }})//Find que da los coches que tienen mas de 70 cv de potencia
 db.coches.find( { "peso":{ $gte:900  }, "peso": { $lte: 1200 } } )//Find que da los coches que pesan entre 900 y 1200 kgs
 db.coches.find( { "peso": null } ) //Find para los valores de peso que son nulos
 db.coches.find( { "Nombre": { $regex: /Seat/} } )// Find con el regex de coches Seat
 db.coches.find({"año de fabricacion": {$lt: 2000 }})// Find con coches anteriores al año 2000
 db.coches.find( { "Nombre": { $regex: /^S/i} }) //Find con regex para que de los coches que empiezan por una S y sin distinguir entre mayúsculas o minúsculas