
// import multer from 'multer';


// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./public")
//     },

    
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname)
//     }
// })
// console.log(storage,"storage kuhsdbficukjahsd")

// const upload = multer({storage})
// console.log(upload,"joidsanxc  upload")

// export default upload;



import multer from "multer";
import path from "path";

// Disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public"); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + "-" + file.fieldname + ext);
  },
});

const upload = multer({ storage });

export default upload;




