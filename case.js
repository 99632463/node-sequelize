// const userModel = sequelize.define('users', {
//   id: {
//     type: Sequelize.INTEGER(11),
//     primaryKey: true,
//     autoIncrement: true
//   },
//   username: Sequelize.STRING(100),
//   password: Sequelize.STRING(100)
// }, {
//   timestamps: false
// })

// userModel.create({ username: '王凯', password: '123' })
//   .then(userInfo => console.log(userInfo))

// userModel.destroy({
//   where: {
//     username: '王凯'
//   }
// }).then(() => console.log('delete success'))

// userModel.update({ username: '婵婵' }, {
//   where: {
//     username: '王凯'
//   }
// }).then(() => console.log('update success'));

// userModel.findAll()
//   .then(res => {
//     console.log(JSON.stringify(res, null, 2))
//   })

// userModel.findOne({
//   where: { username: '婵婵' }
// })
//   .then(res => {
//     console.log(JSON.stringify(res, null, 2))
//   })