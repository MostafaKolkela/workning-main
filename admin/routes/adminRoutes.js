const express = require('express')
const router = express.Router();
const adminController = require('../controller/admincontroller')

router.route('/approveDoctor')
            .post(adminController.approveDoctor)

router.route('/rejectDoctor')
            .post(adminController.rejectDoctor)

router.route('/deleteDoctor')
            .delete(adminController.deleteDoctor)

module.exports = router