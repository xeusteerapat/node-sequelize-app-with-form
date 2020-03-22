module.exports = (sequelize, DataTypes) => {
  const Gigs = sequelize.define('gigs', {
    title: {
      type: DataTypes.STRING(200)
    },
    technologies: {
      type: DataTypes.STRING(200)
    },
    budget: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING(500)
    },
    contactEmail: {
      type: DataTypes.STRING(200)
    }
  });

  return Gigs;
};
