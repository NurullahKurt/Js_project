/*değişkenlerin tanımlanması*/
var ustSayi,altSayi,sayac,pctutulan;
 
/*HTML nesnelerinin seçilmesi*/
var basla=document.getElementById("basla");
var yukari=document.getElementById("yukari");
var asagi=document.getElementById("asagi");
var onayla=document.getElementById("onayla");
var durum=document.getElementById("durum");
 
/*nesnelere ait olayların tanımlanması*/ 
basla.onclick=function(){
ustSayi=100;
altSayi=0;
sayac=0;
basla.disabled = true;
 
pcTahmin();//bilgisayarın tahmini için aşağıdaki pc tahmin fonksiyonunu oluşturdum
}
 
yukari.onclick=function(){
altSayi=pctutulan;
pcTahmin();//bilgisayarın tahmini için aşağıdaki pc tahmin fonksiyonunu oluşturdum
}
 
asagi.onclick=function(){
ustSayi=pctutulan;
pcTahmin();//bilgisayarın tahmini için aşağıdaki pc tahmin fonksiyonunu oluşturdum
 
}
 
onayla.onclick=function(){
durum.innerHTML="Bilgisayar "+sayac+" Tahminde Bildi!";
basla.disabled = false;
}
 
/*bilgisayarın tahmini*/
 //Not bir dahaki sefere kodların yerlerine dikkat edeceksin
function pcTahmin(){
sayac++;
pctutulan=Math.random();
pctutulan=pctutulan*(ustSayi-altSayi);
pctutulan=Math.floor(pctutulan)+altSayi;
durum.innerHTML="Bilgisayarın Tahmini:"+pctutulan; 
}