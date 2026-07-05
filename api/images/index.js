import connectToDatabase from '../../lib/mongodb.js';
import mongoose from 'mongoose';

const ResimlerSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Resimler = mongoose.models.Resimler || mongoose.model("Resimler", ResimlerSchema, "resimler");

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let doc = await Resimler.findOne().sort({ _id: 1 }).lean();

    if (doc) {
      const slug = doc.slug || "";
      delete doc._id;
      delete doc.__v;
      delete doc.createdAt;
      delete doc.updatedAt;
      delete doc.isActive;

      res.status(200).json({ ...doc, slug });
    } else {
      res.status(404).json({ error: "No images found in the database" });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
