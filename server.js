import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3001;

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

// API Endpoint to get the active images
app.get('/api/images', async (req, res) => {
  try {
    // Priority: Find the active document
    let doc = await Resimler.findOne({ isActive: true }).lean();
    
    // Fallback: If no active document, find the most recently created one
    if (!doc) {
      doc = await Resimler.findOne().sort({ _id: -1 }).lean();
    }
    
    if (doc) {
      // Remove mongoose internal fields
      delete doc._id;
      delete doc.__v;
      delete doc.createdAt;
      delete doc.updatedAt;
      delete doc.isActive;
      
      res.json(doc);
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
