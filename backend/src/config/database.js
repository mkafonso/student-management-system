module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'student_management_system',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
