$(document).ready(function () {

    function validateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
  
    $("#formNewsletter").on("submit", function (e) {
        e.preventDefault();
        if ($("#emailNewsletter").val().trim() === "" || !validateEmail($("#emailNewsletter").val())) {
            alert("Merci de saisir un mail valide");
            return;
        }

            var fd = new FormData();

            fd.append("emailNewsletter", $("#emailNewsletter").val());

        $.ajax({
            url: "./actions/formNewsletter.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (reponse) {
                if (reponse.error === true) {
                    alert(reponse.msg);
                }
                else {
                    alert("Votre mail a été bien enregistré ;)");
                }
            }
        });
    });
});