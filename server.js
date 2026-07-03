import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3002;

// CORS configuration - allow requests from the Vite dev server (usually 5173) and production domains
app.use(cors());
app.use(express.json());

// MongoDB Connection String
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://guzelliksalon:MlhKrtgz2552@cluster0.oi22hpq.mongodb.net/";

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { dbName: "resimler" })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schema for the Images
const ResimlerSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Resimler = mongoose.models.Resimler || mongoose.model("Resimler", ResimlerSchema, "resimler");

// API Endpoint: Slug ile belirli bir işletme paketini getir
app.get('/api/images/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // Slug ile eşleşen dökümanı bul
    let doc = await Resimler.findOne({ slug }).lean();

    if (doc) {
      // Remove mongoose internal fields
      delete doc._id;
      delete doc.__v;
      delete doc.createdAt;
      delete doc.updatedAt;
      delete doc.isActive;
      delete doc.slug;

      res.json(doc);
    } else {
      res.status(404).json({ error: "Bu işletme bulunamadı" });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API Endpoint: Ana sayfa için ilk işletmeyi getir (ID sırasına göre)
app.get('/api/images', async (req, res) => {
  try {
    // İlk oluşturulan dökümanı getir
    let doc = await Resimler.findOne().sort({ _id: 1 }).lean();

    if (doc) {
      const slug = doc.slug || "";
      // Remove mongoose internal fields
      delete doc._id;
      delete doc.__v;
      delete doc.createdAt;
      delete doc.updatedAt;
      delete doc.isActive;

      res.json({ ...doc, slug });
    } else {
      res.status(404).json({ error: "No images found in the database" });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Backend API server running at http://localhost:${port}`);
});
