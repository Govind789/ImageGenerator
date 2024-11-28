const imageModel = require("../models/imageModel");


const getSearchHistory = async (req, res) => {
    try {
        const userId = req.user._id;
        const history = await imageModel.find({ userId }).sort({ createdAt: -1 });

        res.json({
            status: 'success',
            data: history
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

module.exports = {
    getSearchHistory
};
