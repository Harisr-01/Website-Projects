export const testRoute = {
    path: '/api/test',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send('Express Server is working and responding to requests.');
    },
};