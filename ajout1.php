<?php
try { 
    $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
}
catch (Exception $e){
    die('Erreur : ' . $e->getMessage());
}
$action = 'UPDATE trouve SET trouve = trouve + 1 WHERE 1';
$db->query($action);
?>
