import { contentData } from "./data.js";

export const postContentRoute = {
    path: '/api/data',
    method: 'post',
    handler: (req, res) => {
        const { title, yearmade, author, desc, mediatype, mediaimage, mediaurl  } = req.body;
        const id = Math.floor(process.uptime());
        const data = {
             id: id,
             title: title,
             yearmade: yearmade,
             author: author,
             desc: desc,
             mediatype: mediatype,
             mediaimage: mediaimage,
             mediaurl: mediaurl
         }
         contentData.push(data);
         res.status(201).json({
             message: 'Content has been added',
             content: data,
         });
    },
};