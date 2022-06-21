<?php
try { 
    $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
}
catch (Exception $e){
    die('Erreur : ' . $e->getMessage());
}
$action = 'UPDATE rate SET rate = rate + 1 WHERE 1';
$db->query($action);
?>