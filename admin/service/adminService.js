const Doctor = require("../doctors/doctorModel.js");
const AppError = require('../../utils/AppError');

const approveDoctor =  async(doctorId)=>{

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) throw new AppError("user not found!" , 404);

    doctor.isApproved = true;
    await doctor.save();

    return { message: "Doctor approved successfully." };
}

const rejectDoctor = async(doctorId)=>{
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) throw new AppError("Doctor not found.",404);

    doctor.isApproved = false;
    await doctor.save();

    return { message: "Doctor rejected" };
}

const deleteDoctor = async(doctorId)=>{
    const doctor = await Doctor.findByIdAndDelete(doctorId);
    if (!doctor) throw new AppError("Doctor not found.",404);

    return { message: "Doctor deleted successfully." };
}



module.exports = {
    approveDoctor,
    rejectDoctor,
    deleteDoctor
}