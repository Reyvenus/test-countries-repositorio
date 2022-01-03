const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("activity", {
        name: {
            type: DataTypes.STRING
        },
        dificult: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5")
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM("verano", "otoño", "primavera", "invierno")
        }
    },
        {timestamps: false,
             createdAt: "creado",
        updatedAt: false
        }
    )
}
