<?php
// definieer hostnaam , gebruiker en database
define('HOST_NAME', 'localhost');
define('USER_NAME', 'root');
define('DB_PASSWORD', '');
define('DATABASE_NAME', 'romanrace');

//LET OP PASSWORD is leeg (mocht jouw phpmyadmin een wachtwoord hebben vul dan root in)
// Probeer een connectie te maken als dat niet lukt throw error
/*
db = PDO:: Object
setAttribute = method waar je ERR_MODE en exception kan definieren.
*/
try {
 $db = new PDO('mysql:host='.HOST_NAME.';dbname='.DATABASE_NAME, USER_NAME, DB_PASSWORD);
 $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(PDOException $e) {
 echo 'ERROR: ' . $e->getMessage();
}