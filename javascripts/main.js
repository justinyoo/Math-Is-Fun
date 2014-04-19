;"use strict";

(function($) {
    var getNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var loadFormula = function() {
        var calcType = $("#menu li.active").text();

        var number1 = getNumber(1, 99);
        var number2 = getNumber(1, 99);
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
                    number1 = getNumber(1, 99);
                    number2 = getNumber(1, 99);
                }
                solution = number1 - number2;
                break;
            case "Multiplication":
                symbol = "&times;";
                while (number1 > 12 || number2 > 12) {
                    number1 = getNumber(1, 12);
                    number2 = getNumber(1, 12);
                }
                solution = number1 * number2;
                break;
            case "Division":
                symbol = "&divide;";
                while (Math.floor(number1 / number2) != number1 / number2) {
                    number1 = getNumber(1, 99);
                    number2 = getNumber(1, 99);
                }
                solution = number1 / number2;
                break;
            default:
                break;
        }

        $("#number1").text(number1);
        $("#number2").text(number2);
        $("#symbol").html(symbol);
        $("#answer").val("").focus();
        $("#solution").val(solution);

        $("#answer").removeClass("input-wrong").removeClass("input-correct");
        $("#result").removeClass("alert-danger").removeClass("alert-success").text("").hide();
    };

    var calculate = function(solution) {
        var answer = $("#answer").val();
        if (solution == answer) {
            $("#answer").removeClass("input-wrong").addClass("input-correct");
            $("#result").removeClass("alert-danger").addClass("alert-success").text("Correct!!!").show();
        } else {
            $("#answer").removeClass("input-correct").addClass("input-wrong");
            $("#result").removeClass("alert-success").addClass("alert-danger").text("Oh oh. Try again.").show();
        }
        $("#answer").focus();
        return false;
    };

    $(document).ready(function () {
        loadFormula();

        $("form").submit(function(event) {
            event.preventDefault();
            calculate($("#solution").val());
        });

        $("#try-again").click(function() {
            loadFormula();
        });
    });
})(jQuery);
