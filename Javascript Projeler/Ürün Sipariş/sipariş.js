//Girdi Değişkenlei
var urunTipi,urunSecimi,urunSayisi,urunTaksidi;

//Çıktı Değişkenlei
var araToplam,odenecekToplamTutar,kargoUcreti=7;

//Global döngü Değişkenlei
var i;

//Global nesne Değişkenlei
var liste,secenek;

//Dizi tipindeki değişkenler
var erkekParfumleri=["Celvin Clein",100,"Lacoste",120,"Axe",30,"First Class",50];
var kadınParfumleri=["Burbery",150,"Avon",80,"She",60,"Nina Rİcci",130];

function urunAdediDoldur()
{
    for(i=1;i<=10;i++)
    {
        secenek=document.createElement("option");
        liste=document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}


function urunTaksidiDoldur()
{
    for(i=0;i<=12;i=i+3)
    {
        secenek=document.createElement("option");
        liste=document.getElementById("urunTaksidi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function urunleriGetir()
{
    document.querySelectorAll('#urunListesi option').forEach(option =>option.remove());
    /*querySelectorAll bütün optionları seç
    forEach her elaman için*/

    liste=document.getElementsByName("urunTipi");
    for(i=0;i<liste.length;i++)
    {
        if(liste[i].checked)
        {
            urunTipi=liste[i].value;
        }
    }
    console.log(urunTipi);

    if(urunTipi=="E")
    {
        for(i=0;i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");//nesne içine eklendi
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);//secenek içine ekle
            secenek.text=erkekParfumleri[i];
            secenek.value=erkekParfumleri[i+1];
        }

    }
    else if(urunTipi=="K")
    {
        for(i=0;i<kadınParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=kadınParfumleri[i];
            secenek.value=kadınParfumleri[i+1];
        }
    }
}

function Hesapla()
{
    liste=document.getElementById("urunListesi");
    urunSecimi=liste[liste.selectedIndex].value;//secili ındex degeri al
    console.log(urunSecimi);

    liste=document.getElementById("urunAdedi");
    urunAdedi=liste[liste.selectedIndex].value;
    console.log(urunAdedi);

    liste=document.getElementById("urunTaksidi");
    urunTaksidi=liste[liste.selectedIndex].value;
    console.log(urunTaksidi);

    araToplam=urunSecimi*urunAdedi;
    console.log(araToplam);

    if(urunTaksidi==3)
    {
        araToplam=urunSecimi*1.1;
    }
    else if(urunTaksidi==6)
    {
        araToplam=araToplam*1.2
    }
    else if(urunTaksidi==9)
    {
        araToplam=araToplam*1.3
    }
    else if(urunTaksidi==12)
    {
        araToplam=araToplam*1.4
    }

    console.log(araToplam.toFixed(2));//sadece 2 basamak göster
    document.getElementById("txtAraToplam").value=araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value=urunSecimi;

    if(araToplam<100)
    {
        document.getElementById("txtKargo").value=kargoUcreti;
        odenecekTutar=araToplam+kargoUcreti;
    }
    else if(araToplam>=100)
    {
        document.getElementById("txtKargo").value=0;
        odenecekTutar=araToplam;
    }
    
    console.log(odenecekTutar);
    document.getElementById("sonuc").innerHTML="Ödemeniz gereken toplam tutar(Vade farkı ve kargo farkı dahil): "+odenecekTutar;
}