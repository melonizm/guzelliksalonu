import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://guzelliksalon:MlhKrtgz2552@cluster0.oi22hpq.mongodb.net/";

const realData = {
  sacvitamini: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738003/SacVitaminiMezoterapi_rkolkr.webp",
  isletmefoto2: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738002/isletmefoto2_mmoazx.png",
  striort: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738002/Striortcatlaktedavisi_o5oz3l.webp",
  plazmapen: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738002/Plazmapen_tewg8j.jpg",
  sacislemleri: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738002/sacislemleri_ala0on.webp",
  pedikur: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738002/Pedikur_s2teop.webp",
  rasping: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738002/Rasping_cn3tno.jpg",
  promakyaj: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738001/promakyaj_a4p0cs.jpg",
  isletmefoto1: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738001/isletmefoto1_mjiryb.png",
  proteztirnak: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738001/ProtezTirnak_gqloma.jpg",
  microblading: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738000/MicrobladingKilTeknigi_guqcu8.jpg",
  isletmefoto3: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738000/isletmefoto3_etloa6.jpg",
  manikur: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738000/Manikur_vu687z.jpg",
  lazerepilasyon: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737999/lazerepilasyon_nlr5ym.jpg",
  kasvitamini: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737999/kasvitamini_op76gk.jpg",
  kalicieyeliner: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737999/KaliciEyeliner_qfh7fw.jpg",
  gelinbasi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737998/GelinBasi_dlckf2.png",
  ipekkirpik: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737998/ipekKirpik_okg8yr.jpg",
  hydrafacial: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737997/Hydrfacial_qeyotk.jpg",
  g5masaji: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737997/G5masaji_czzw08.jpg",
  favicon: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737997/favicon_djymgj.png",
  ciltlifting: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737997/Ciltlifting_ay0k2y.webp",
  dudakrenklendirme: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737997/DudakRenklendirme_qjowtt.jpg",
  dermapen: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737996/Dermapen_maerlk.webp",
  altinoran: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737996/AltinoranKasAlimi_d7pgis.jpg",
  ciltbakimi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782737996/ciltbakimi_snvqsz.webp",
  _description: "Real Cloudinary images updated by AI",
  isActive: true
};

async function clearData(collection) {
    console.log("Veriler siliniyor...");
    await collection.deleteMany({});
    console.log("Mevcut tüm resim verileri başarıyla silindi!");
}

async function uploadData(collection) {
    console.log("Yeni veriler yükleniyor...");
    await collection.insertOne(realData);
    console.log("Yeni Cloudinary resim verileri başarıyla yüklendi!");
}

async function run() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("resimler");
        const collection = database.collection("resimler");
        
        await clearData(collection);
        await uploadData(collection);
    } catch (error) {
        console.error("Bir hata oluştu:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
