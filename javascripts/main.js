(function ($) {
    var getNumber = function () {
        var max = 99;
        var min = 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $(document).ready(function() {
        var calcType = $("#menu li.current").text();

        var number1 = getNumber();
        var number2 = getNumber();
        var symbol = "";
        var solution = 0;

        switch (calcType) {
            case "Addition":
                symbol = "+";
                solution = number1 + number2;
                break;
            case "Substraction":
                symbol = "-";
                while (number1 <= number2) {
                    number1 = getNumber();
                    number2 = getNumber();
                }
                solution = number1 - number2;
                break;
            case "Multiplication":
                symbol = "&times;";
                solution = number1 * number2;
                break;
            case "Division":
                symbol = "&divide;";
                while (Math.floor(number1 / number2) != number1 / number2) {
                    number1 = getNumber();
                    number2 = getNumber();
                }
                solution = number1 / number2;
                break;
            default:
                break;
        }

        $("#number1").text(number1);
        $("#number2").text(number2);
        $("#symbol").text(symbol);
        $("#solution").val(solution);

        $("#submit").click(function () {
            var answer = $("#answer").val();
            if (solution == answer) {
                $("#result").removeClass("wrong").addClass("correct").text("Correct!!!");
            } else {
                $("#result").removeClass("correct").addClass("wrong").text("Oh oh. Try again.");
            }
        });

        $("#again").click(function() {
            location.reload(false);
        });
    });
})(jQuery)
