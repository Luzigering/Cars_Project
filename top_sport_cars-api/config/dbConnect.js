import mongoose from "mongoose";
mongoose.connect("mongodb+srv://luzi:gehl8688@sportcarsdatabase.1uwxf.mongodb.net/sportcarsdatabase");
let db = mongoose.connection
export default db;