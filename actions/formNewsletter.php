<?php

    if(isset($_POST["emailNewsletter"]) && filter_var($_POST["emailNewsletter"], FILTER_VALIDATE_EMAIL)){
        $emailTab= [];
        $subTab = [$_POST["emailNewsletter"]];

        $fp = fopen('file.csv', "a");
        fputcsv($fp,$subTab);
        fclose($fp);

        if (($handle = fopen("file.csv", "r")) !== FALSE){
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE){
                for ($i=0; $i < count($data); $i++){
                    array_push($emailTab,$data[$i]);
                }
            }
            fclose($handle);
            var_dump($emailTab);

            $arr = array('error' => false);
            echo(json_encode($arr));
            return;
        }

    }




