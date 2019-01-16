//FORM VE INPUTLARA ERISIM 2 YONTEMI VAR

// function tikla(){
// var deger=document.forms["frm1"]["kullaniciAdi"].value;
// var deger=document.frm1.kullaniciAdi.value;

// alert(deger);
// return false;
// }

//FORM DOGRULAMA OLAYI
//SUBMIT ETTIRTMEMEK !!!!
// function dogrula(){

//     var deger=document.forms["frm1"]["kullaniciAdi"].value;
//     if(deger==""){
//         alert("isim boş");
//         return false;
//     }
//     else{
//         alert(deger);
//         return false;
//     }
// }

// function sayimi(){

//     var deger=document.forms["frm1"]["kullaniciAdi"].value;
// try {
//     var sonuc=parseInt(deger);
//     alert("Sayi girdin");
//         return false;
// } catch (error) {
//     alert("sayi girmedin . hata sorunu"+error.source);
    
// }
    // if(typeof(deger)!=typeof(3)){
    //     alert("Sayi girmediniz");
    //     return false;
    // }
    // else{
    //     alert("sayi girdin");
    // }
// }

// SAYIMI DEGIL MI  =>  isNan(deger)==true   ise sayi degildir deger


//FORM APILERI

//.checkValidity() ile geçerli/geçersiz
// function kontrol(){
//     var nesne=document.getElementById("sayi");
//    if(!nesne.checkValidity()){
//        alert(nesne.validationMessage);
//    }
//    else{
// alert("oldu");
//    }
    
// }

// CSS VERMEK
// function go(){
//     document.getElementById("div").style.width="300px";
//     document.getElementById("div").style.height="400px";
//     document.getElementById("div").style.backgroundColor="black";
// }


//Manule olarak nesnenin eventlerine fonksiyon vermek
// var nesne=document.getElementById("div");
// nesne.onclick=function(){
//     this.innerHTML="DEGISTI";
// }

//Manule olarak nesnenin eventlerine fonksiyon vermek
// var elemanlarlistesi=document.getElementsByTagName("img");
// elemanlarlistesi[0].onmouseover=function(){
//     this.src="saf";
// }
// elemanlarlistesi[0].onmouseout=function(){
//     this.src="yeni.png";
// }


var buton=document.getElementById("buton");
buton.addEventListener("click",function(){
    document.getElementById("para").innerHTML="SA";
});

































