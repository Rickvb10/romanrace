	

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include 'assets/db/config.php';

// $jsonFile = file_get_contents('groep.json', true);
// $decodetoPhp = json_decode($jsonFile);
// //print_r($decodetoPhp->groep);
// foreach ($decodetoPhp as $key => $value) {
//  print_r($value);
// }

$query = "SELECT id,voornaam,achternaam,leeftijd,groep_id,niveau
          FROM leerling
          INNER JOIN voortgang
          ON leerling.voortgang_id = voortgang.voortgang_nummer";
$smt = $db->prepare($query);
$smt->execute();
$result = $smt->fetchAll(PDO::FETCH_ASSOC);

if (empty($result)){
	echo json_encode(array(
		'message' => 'Leerling niet gevonden'
	));
    }
     else{
    //echo json_encode($result);
    
    $fp = fopen('results.json', 'w');
    fwrite($fp, json_encode($result));
    fclose($fp);
	}
