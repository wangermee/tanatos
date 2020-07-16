$(document).ready(function () {
    
    function validateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };

    $("#formContact").on("submit", function (e) {
        e.preventDefault();
        if ($("#emailContact").val().trim() === "" || !validateEmail($("#emailContact").val())) {
            alert("Merci de saisir un mail valide");
            return;
        }

        if ($("#subject").val().trim() === "") {
            alert("Merci de saisir un sujet");
            return;
        }
        if ($("#message").val().trim() === "" || $("#message").val().trim() === "Your Message") {
            alert("Merci de saisir un message");
            return;
        }

            var fd = new FormData();

            fd.append("emailContact", $("#emailContact").val());

            fd.append("subject", $("#subject").val());

            fd.append("message", $("#message").val());


        $.ajax({
            url: "./actions/formContact.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (reponse) {
                if (reponse.error === true) {
                    alert(reponse.msg);
                }
                else {
                    alert("Votre message a été bien envoyé ;)");
                }
            }
        });
    });
});