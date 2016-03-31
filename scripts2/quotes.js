var quotes = [
        "We are always the same age inside. - Gertrude Stein",
        "Good, better, best. Never let it rest. 'Till your good is better and your better is best. - St. Jerome'",
        "Go for it now. The future is promised to no one. - Wayne Dyer",
        "We may encounter many defeats but we must not be defeated - Maya Angelou",
    ];

    var QuotePattern = /random quote/i;
    robot.respond(QuotePattern, function(msg) {
        var getRandomQuote = quotes[Math.floor(Math.random()*quotes.length)];

        // This will reply with a random quote
        msg.reply(getRandomQuote);
    });
