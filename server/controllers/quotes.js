const url = require('url');
const Dataservice = require('../dataservice/quotes');

module.exports = {
//express promise router handles general exception
 list: async (req, res, next) => {
    var queryData = url.parse(req.url, true).query;
    if(queryData.state) {
        const state = queryData.state.replace(/"/g,"");
        const response = await Dataservice.findByState(state);
        res.status(200).json({ response });
    }
    else if(queryData.make) {
        const make = queryData.make.replace(/"/g,"");
        const response = await Dataservice.findByMake(make);
        res.status(200).json({ response });
    }
    else if(queryData.former_insurer) {
        const former_insurer = queryData.former_insurer.replace(/"/g,"");
        const response = await Dataservice.findByFormer_Insurer(former_insurer);
        res.status(200).json({ response });
    }
    else {
        const err = "query did not contain make, state, for former insurer";
        res.status(401).json({ error: err });
        console.log();
    }


 },

 findById: async (req, res, next) => {
    const response = await Dataservice.findById(req.params.id);
    res.status(200).json({ response });
 }

}