import { Application } from "express";
import supabase from "../../services/supabase";
import multer from "multer";

export default function uploadFileMiddleware(app: Application) {
  const storage = multer.memoryStorage()
  const upload = multer({ storage });
  
  app.post('/api/upload', upload.single('file') as any, async (req, res) => {
    if (req.file?.buffer) {
      const now = new Date();
      const datename = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}--${now.getHours()}h${now.getMinutes()}m${now.getSeconds()}s`
      const filename = `${datename}__${req.body.referrer}`
      const spReq = await supabase.storage.from('kaptur').upload(filename, req.file?.buffer)
      res.send('OK');
    } else {
      res.sendStatus(500)
    }
  })
}