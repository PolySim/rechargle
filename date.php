<?php
date_default_timezone_set('Europe/Paris');
$date = date('d');
while ($date > 6){
    $date -=  7;
}

try { $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
}
catch (Exception $e){
    die('Erreur : ' . $e->getMessage());
}

$tr = $db->prepare('SELECT * FROM jour');
$tr->execute();
$trouve = $tr->fetchAll();
foreach($trouve as $trouve1){
    $jour = $trouve1['num'];
}

if ($jour != $date){
    $action = 'UPDATE rate SET rate = 0 WHERE 1';
    $db->query($action);
    $action2 = 'UPDATE trouve SET trouve = 0 WHERE 1';
    $db->query($action2);
    $action3 = 'UPDATE numero SET numero = numero + 1 WHERE 1';
    $db->query($action3);
    $action4 = 'UPDATE jour SET num ='. $date .' WHERE 1';
    $db->query($action4);
}
?>