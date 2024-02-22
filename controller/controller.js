const getApi = (req, res, next) => {
    console.log("From querystring:" + req.query)
    console.log("From params:" + req.params)
    res.json(req.query);
};

const postApi = (req, res, next) => {
    console.log("This is post" + req.body);
    res.json(req.body);
};

module.exports = {
    getApi, postApi
}
