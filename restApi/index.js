const app = require("./app");
const dotenv = reqiore("dotenv");

dotenv.config({path: "./congig.env"});

app.listen(process.env.RUNNING_PORT, function(){
    console.log(process.env.RUNNING_PORT);
});