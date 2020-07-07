<?php

    if(isset($_POST["message"]) && isset($_POST["emailContact"]) && filter_var($_POST["emailContact"], FILTER_VALIDATE_EMAIL)){

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From:' . $_POST["emailContact"] . "\r\n";
        $to       = 'tanatostest@gmail.com';

        if(mail($to,$_POST["subject"],$_POST["message"],$headers, "-f")){
            echo "WOOHOO, email sent";
        }
        else{
            echo "BUMMER, email failed";
        }
    }

//tanatostest@gmail.com
//pass: Tanatos51
