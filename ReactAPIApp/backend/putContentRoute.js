import { contentData } from "./data.js";

export const putContentRoute = {
    path: '/api/data/:id',
    method: 'put',
    handler: (req, res) => {
             const id = req.params.id;
             const content = contentData.find((contentData) => contentData.id === parseInt(id));

             if (!content) {
                 res.status(404).json({
                     message: 'Could not find data'

                 });
             }

             const index = contentData.indexOf(content);

             const { title, yearmade, author, desc, mediatype, mediaimage, mediaurl  } = req.body;
             const data = {
                 id: parseInt(id),
                 title: title,
                 yearmade: yearmade,
                 author: author,
                 desc: desc,
                 mediatype: mediatype,
                 mediaimage: mediaimage,
                 mediaurl: mediaurl
             }
             contentData[index] = data;
             res.status(200).json({
                 message: 'Content has been updated'
             });
    }
};