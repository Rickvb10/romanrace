<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'db/config.php';

// $jsonFile = file_get_contents('groep.json', true);

// $decodetoPhp = json_decode($jsonFile);

// //print_r($decodetoPhp->groep);

// foreach ($decodetoPhp as $key => $value) {
//  print_r($value);
// }

$query = "SELECT id,voornaam,achternaam,groep_id
          FROM leerkracht";
            $smt = $db->prepare($query);
            $smt->execute();
            $result = $smt->fetchAll(PDO::FETCH_ASSOC); 
        
       // print_r($result);
 echo json_encode($result);