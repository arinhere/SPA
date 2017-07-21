<?php
    header('Access-Control-Allow-Origin: *');
    $data = json_decode(file_get_contents("php://input"));
    $fname=$data->fname;
    $pw=$data->pw;
    $json_data="";

    if($fname=="arinhere" && $pw=="admin"){
        echo json_encode("success");
    }
    else{
        echo json_encode("failed");
    }    
?>