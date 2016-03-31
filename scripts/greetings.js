// When greeted with a 'Hello' , bot will respond
module.exports = function(robot) {
    robot.respond(/hello/i, function(msg) {
        msg.reply("Hello. I am Jason-botman, your personal healthcare companion. ");
    });
}

module.exports = function(robot) {
    robot.respond(/(good bye|bye|ttyl)|/i, function(msg) {
        msg.reply("Leaving so soon?");
    });
}

module.exports = function(robot) {
    robot.respond(/how are you?/i, function(msg) {
        msg.reply("I'm fine. Thank you.");
    });
}
