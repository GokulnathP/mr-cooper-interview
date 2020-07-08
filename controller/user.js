const User = require('../models/user');
const Request = require('../models/request');
const Service = require('../models/services');
const Worker = require('../models/workers');
const booking = require('../models/booking');

module.exports.getUser = (req, res) => {
    console.log(req.body.name);
    User.findById('5f056c64239bdc401ce64bda')
        .then(user => {
            res.status(200).json({ message: 'Success', user: user });
        })
        .catch(
            err => console.log(err)
        );
}

module.exports.createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        requestes: [],
        booking: []
    });
    user.save()
        .then(user => {
            res.status(200).json(
                { message: 'User created Successfully', user: user }
            );
        })
        .catch(
            err => console
        )
}

module.exports.addRequest = (req, res) => {
    const request = new Request({
        userId: '5f056c64239bdc401ce64bda',
        serviceId: req.body.id
    })

    request.save()
        .then(request => {
            console.log('Request sened');
            User.find('5f056c64239bdc401ce64bda')
                .then(user => {
                    user.requestes.push(request._id);
                    user.save();
                })
            Service.find(req.body.id)
                .then(service => {
                    service.requestes.push(request._id);
                    service.save();
                })
        })
}

module.exports.acceptRequest = (req, res) => {
    const requestId = req.body.requestId;
    const workerId = req.body.workerId;
    let userId;
    let serviceId;

    Request.findById(requestId)
        .then(request => {
            userId = request.userId;
            serviceId = request.serviceId;
        })

    User.findById(userId)
        .then(user => {
            user.requestes = user.requestes.filter(reqId => reqId != requestId);
            user.save();
        })

    Service.findById(serviceId)
        .then(service => {
            service.requestes = service.requestes.filter(reqId => reqId != requestId);
            service.save();
        })

    const booking = new Booking({
        serviceId: serviceId,
        userId: userId,
        workerId: workerId,
        isCompleted: false
    });

    booking.save()
        .then(booking => {
            User.findById(userId)
                .then(user => {
                    user.booking.push(booking._id);
                    user.save();
                })
            Worker.findById(workerId)
                .then(worker => {
                    worker.bookings.push(booking._id);
                    service.save();
                })
        });
}