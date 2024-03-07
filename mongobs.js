const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("connected"))
  .catch((e) => console.log("not connected", e));

const studentSchema = new mongoose.Schema({
  student_id: Number,
  name: String,
  grade: String,
  subject: String,
});
const academicRecords = new mongoose.model("academicRecords", studentSchema);

const studentSchema1 = new mongoose.Schema({
  student_id: Number,
  name: String,
  Activity_type: String,
  achievements: String,
  duration: Number,
});
const CoCurricularActivities = new mongoose.model(
  "CoCurricularActivities",
  studentSchema1
);

// const CreateStudentData = async () => {
//   try {
//     const data = academicRecords.create([
//       {
//         student_id: 1,
//         name: "ritika",
//         grade: "A",
//         subject: "Maths",
//       },
//       { student_id: 2, name: "nikky", grade: "A", subject: "Hindi" },
//       ,
//       {
//         student_id: 3,
//         name: "neha",
//         grade: "B",
//         subject: "Science",
//       },
//       {
//         student_id: 4,
//         name: "pooja",
//         grade: "C",
//         subject: "English",
//       },
//       {
//         student_id: 5,
//         name: "shakshi",
//         grade: "A",
//         subject: "Economics",
//       },
//       {
//         student_id: 6,
//         name: "archit",
//         grade: "A",
//         subject: "Bs",
//       },
//     ]);
//   } catch (error) {
//     console.log(error);
//   }
// };
//CreateStudentData();
// const CreateCurricularData = async () => {
//   try {
//     const datas = CoCurricularActivities.create([
//       {
//         student_id: 1,
//         name: "ritika",
//         Activity_type: "cricket",
//         achievements: "win",
//         duration: 2,
//       },
//       {
//         student_id: 2,
//         name: "nikky",
//         Activity_type: "dance",
//         achievements: "win",
//         duration: 3,
//       },
//       {
//         student_id: 3,
//         name: "neha",
//         Activity_type: "rangoli",
//         achievements: "fail",
//         duration: 1,
//       },
//       {
//         student_id: 4,
//         name: "pooja",
//         Activity_type: "mehndi",
//         achievements: "win",
//         duration: 1,
//       },
//       {
//         student_id: 5,
//         name: "shakshi",
//         Activity_type: "dance",
//         achievements: "win",
//         duration: 2,
//       },
//       {
//         student_id: 6,
//         name: "archit",
//         Activity_type: "dance",
//         achievements: "win",
//         duration: 2,
//       },
//     ]);
//   } catch (error) {
//     console.log(error);
//   }
// };
// CreateCurricularData();
// const UpdateAcadmicData = async () => {
//   const result = await academicRecords.CoCurricularActivities.updateOne(
//     {
//       name: "ritika jain",
//     },
//     {
//       $set: { name: "ritika" },
//     }
//   );
// };
// UpdateAcadmicData();
// const DeleteData = async () => {
//   const result = await academicRecords.deleteMany({
//     name: "ritika",
//   });
//   const result2 = await CoCurricularActivities.deleteMany({
//     name: "ritika",
//   });
// };
// DeleteData();

async function getUsersData(name) {
  try {
    const user = await CoCurricularActivities.findOne({
      name: name,
    }).exec();
    if (!user) {
      return null;
    }
    const orders = await academicRecords
      .find({ student_id: user.student_id })
      .exec();
    return { user, orders };
  } catch (error) {
    console.error(error);
  }
}
getUsersData("neha")
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.error(err);
  });
