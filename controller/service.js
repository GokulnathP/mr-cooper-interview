const Service = require('../models/services');

module.exports.getService = (req, res) => {
    Service.find({ city: req.body.city })
        .then(services => {
            res.status(200).json(services);
        })
        .catch(err => console.log(err));
}

module.exports.addService = (req, res) => {
    const service = new Service({
        name: req.body.name,
        city: req.body.city,
        workers: [],
        requestes: []
    });

    service.save()
        .then(service => {
            res.status(200).json({ message: 'Added Successfully', service })
        })
        .catch(
            err => console.log(err)
        );
}