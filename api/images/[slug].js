import connectToDatabase from '../../lib/mongodb';

const ResimlerSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Resimler = mongoose.models.Resimler || mongoose.model("Resimler", ResimlerSchema, "resimler");

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;

    let doc = await Resimler.findOne({ slug }).lean();

    if (doc) {
      delete doc._id;
      delete doc.__v;
      delete doc.createdAt;
      delete doc.updatedAt;
      delete doc.isActive;
      delete doc.slug;

      res.status(200).json(doc);
    } else {
      res.status(404).json({ error: "Bu işletme bulunamadı" });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
