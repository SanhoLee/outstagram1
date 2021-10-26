import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/outstagram2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log(" ✅ Conneted to DB  ");
const handleError = (error) => console.log("DB Error : ", error);

// db 오브젝트에 event를 붙여준다.
// on-> 클릭과 같이 매번 db이벤트를 확인, once-> 연결 될때 한 번만 발생하는 이벤트.
db.on("error", handleError);
db.once("open", handleOpen);
