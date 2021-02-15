const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        번호: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        제목: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        작성자: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        작성일: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        조회: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },

      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
};
