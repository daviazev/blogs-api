module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'categories',
    }
  );

  return User;
};
