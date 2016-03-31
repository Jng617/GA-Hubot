module.exports = function(robot) {
    robot.respond(/is today a holiday\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });
}


module.exports = function(robot) {
    robot.respond(/What day is it today?\s?\?/i, function(msg){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = mm+'/'+dd+'/'+yyyy;

        msg.reply("Today is " + today);
      });
      }
