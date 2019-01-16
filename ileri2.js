//DINAMAK ELEMAN EKLEME

// function yeniEkle(){

//     var metin=document.getElementById("eklenecek").value;
//   var anakisim= document.getElementById("ana");
//   var yeniNesne=document.createElement("p");
//   yeniNesne.innerText=metin;
// anakisim.appendChild(yeniNesne);
// }

//DINAMAK OLARAK ELEMAN SILME
// function sil(){

//     var pler=document.getElementsByTagName("p");

//     if(pler.length>0){
//         var anakisim= document.getElementById("ana");
//         anakisim.removeChild( pler[0]);
//     }
// }

//DINAMIK OLARAK CLASS EKLEMEK

// function degistir() {
//     var h3ler = document.getElementsByTagName("h2");
//     var i = 0;
   
//     for (; i < h3ler.length; i++) {
//         var ozellik = document.createAttribute("class");
//         ozellik.value = "yeah";
//         h3ler[i].setAttributeNode(ozellik);
//     }
// }


// function hrefekle(){
//     var aNesnem=document.getElementById("anesnem");
//   var hrefOzelligi=  document.createAttribute("href");
//   hrefOzelligi.value="https://www.google.com.tr/";
//   aNesnem.setAttributeNode(hrefOzelligi);
// }

// var ana=document.getElementById("ana").childNodes.length;
// alert(ana);

//ÇIKMAK ISTEDIGINE EMIN MIISN OLAAYI

// function yonlendir(){

//     var ok=confirm();
//     if(ok==true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

document.getElementById("sure").innerHTML="";
var sayi=5;
var sure;
var indirme;

function indir(){
    
    document.getElementById("indir").disabled = true;
    document.getElementById("iptal").disabled = false;
 indirme=setTimeout(dosyaindirme,5000);

  sureyisay();
sure=setInterval(sureyisay,1000);
}

function dosyaindirme(){
    alert("Dosya inmeye başladı");
    document.getElementById("sure").innerHTML="";
   
}

function sureyisay(){
   
    document.getElementById("sure").innerHTML="Dosya "+sayi +" içinde indirilecek";
    sayi--; 
    if(sayi==-1){
        clearInterval(sure);
        document.getElementById("sure").innerHTML="";
       document.getElementById("indir").disabled = false;
        document.getElementById("iptal").disabled = true;
        
    }
   

}

function iptal(){
    document.getElementById("indir").disabled = false;
    clearInterval(sure);
    clearTimeout(indirme);
    document.getElementById("sure").innerHTML="Dosya indirmesi durdu";
    sayi=5;
}
