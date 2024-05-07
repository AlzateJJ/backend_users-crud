const app = require('./app');
const sequelize = require('./utils/connection');

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
        sequelize.sync(); // {force:true} para hacer cambios en la base de datos (tipos de datos)
        console.log("DB connected");
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();
