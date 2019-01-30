module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  }, {});
  // User.associate = function(models) {
    // associations can be defined here
  // };
  User.generate = name => User.create({ name });
  User.getAllUsers = () => User.findAll();
  return User;
};