import mongoose from 'mongoose';

const ResimlerSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Resimler = mongoose.models.Resimler || mongoose.model("Resimler", ResimlerSchema, "resimler");

export default Resimler;
