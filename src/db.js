import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false, 몽고 6.x에서 default로 편입되었음
});
const db = mongoose.connection;
const handleOpen = () => console.log("😎Conneceted to DB 🔌");

db.on("error", (error) => console.log("❌ DB Error ❌", error));
db.once("open", handleOpen);
