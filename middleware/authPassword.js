// const bcrypt = require('bcrypt');
// require('mongoose')
// const {usersSchema} = require ('../models/usersSchema')

// usersSchema.pre('save', async function (next) {
//     if (this.isModified('password') || this.isNew) {
//       try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(this.password=password, salt);
//         this.password = hashedPassword;
//         next();
//       } catch (err) {
//         return next(err);
//       }
//     } else {
//       return next();
//     }
//   });

// // module.exports = aur