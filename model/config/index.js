const setting =  require('./default.js')

module.exports =  {
    sequelize: {
        database: setting.database.database,
        username: setting.database.username,
        password: setting.database.password,
        define: {
            charset: 'utf8'
        },
        host: setting.database.host,
        dialect: setting.database.dialect,
        operatorsAliases: 'false',
        allowNull: false,
        logging: false
    }
}
