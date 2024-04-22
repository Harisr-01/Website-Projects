import { contentData } from "./data.js";

export const deleteContentRoute = {
    path: '/api/data/:id',
    method: 'delete',
    handler: (req, res) => {
             const id = req.params.id;
             const content = contentData.find((contentData) => contentData.id === parseInt(id));

             if (!content) {
                 res.status(404).json({
                     message: 'Could not find data'

                 });
             }

             const index = contentData.indexOf(content);
             console.log(index);
             console.log(content);
             contentData.splice(index, 1);
             res.status(200).json({
                 message: 'Content has been now deleted from records'
             });
    }
};