function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('#quickMessage').html(messages[i]).fadeIn(700).delay(3000).fadeOut(500, function() {
        nextMsg(i + 1);
    });
};

var messages = [
    "ДОКУМЕНТАЦИЯ ПО ПЛАНИРОВКЕ ТЕРРИТОРИИ",
    "ПРЕДПРОЕКТНАЯ ДОКУМЕНТАЦИЯ",
    "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ",
    "РАЗРАБОТКА ПРОЕКТНОЙ ДОКУМЕНТАЦИИ",
    "РАЗРАБОТКА РАБОЧЕЙ ДОКУМЕНТАЦИИ",
    "ПРОЕКТЫ РЕКУЛЬТИВАЦИИ"
    ];

$('#message').hide();

nextMsg(0);

