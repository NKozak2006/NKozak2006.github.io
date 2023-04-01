$(document).ready(function() {
    $("#Sexual").on ({
        mouseenter: function() {
            $("#SexDis").stop();
            $("#SexDis").slideDown(650);
        },
        mouseleave: function() {
            $("#SexDis").stop();
            $("#SexDis").slideUp(500);
        }
    });
    $("#Sensual").on ({
        mouseenter: function() {
            $("#SenDis").stop();
            $("#SenDis").slideDown(900);
        },
        mouseleave: function() {
            $("#SenDis").stop();
            $("#SenDis").slideUp(400);
        }
    });
    $("#Romantic").on ({
        mouseenter: function() {
            $("#RomDis").stop();
            $("#RomDis").slideDown(650);
        },
        mouseleave: function() {
            $("#RomDis").stop();
            $("#RomDis").slideUp(500);
        }
    });
    $("#Aesthetic").on ({
        mouseenter: function() {
            $("#AesDis").stop();
            $("#AesDis").slideDown(650);
        },
        mouseleave: function() {
            $("#AesDis").stop();
            $("#AesDis").slideUp(500);
        }
    });
    $("#Platonic").on ({
        mouseenter: function() {
            $("#PlaDis").stop();
            $("#PlaDis").slideDown(650);
        },
        mouseleave: function() {
            $("#PlaDis").stop();
            $("#PlaDis").slideUp(500);
        }
    });
});