const express = require("express");
const app = express();


// import routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");


// import 
const database = require("./config/dataBase");
const cookieParser = require("cookie-parser");
const cors = require("cors") // to entertain the frontend req
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;


// dataBase connect
database.connect();


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000", //frontend
        Credential:true,
    })
);

app.use(
    fileUpload({
        useTempFiles : true,
        tempFileDir : "/tmp"
    })
);


// cloudinary connect
cloudinaryConnect();


// routes mount
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);


// default route
app.get("/", (req , res)=>{
    return res.json(
        {
        success:true,
        message: `Your server is up and running...`
        }
    );
    // res.send(`server is running`)
});


app.listen(PORT , ()=>{
    console.log(`Server started on port ${PORT}`);
});