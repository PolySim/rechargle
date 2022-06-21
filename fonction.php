<?php
function returnTab(){
    try { $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    $img = $db->prepare('SELECT * FROM image');
    $img->execute();
    $image = $img->fetchAll();

    $tab = [];
    foreach ($image as $img1){
        $tab[] = ajoutImg($img1['id'], $img1['img1'], $img1['img2'], $img1['alt1'], $img1['alt2'], $img1['indice'], $img1['alt3'], $img1['reponse']);
    }
    return $tab;
}

function ajoutImg($id, $im1, $im2, $alt1, $alt2, $indice, $alt3, $reponse){
    return array(
        'id' => $id,
        'im1' => $im1,
        'im2' => $im2,
        'alt1' => $alt1,
        'alt2' => $alt2,
        'indice' => $indice,
        'alt3' => $alt3,
        'reponse' => $reponse,
    );
}

function recupTrouve(){
    try { $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    $tr = $db->prepare('SELECT * FROM trouve');
    $tr->execute();
    $trouve = $tr->fetchAll();
    foreach($trouve as $trouve1){
        $retour = $trouve1['trouve'];
    }
    return $retour;
}

function recupEchec(){
    try { $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    $tr = $db->prepare('SELECT * FROM rate');
    $tr->execute();
    $trouve = $tr->fetchAll();
    foreach($trouve as $trouve1){
        $retour = $trouve1['rate'];
    }
    return $retour;
}

function recupJour(){
    try { $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    $tr = $db->prepare('SELECT * FROM jour');
    $tr->execute();
    $trouve = $tr->fetchAll();
    foreach($trouve as $trouve1){
        $retour = $trouve1['num'];
    }
    return $retour;
}

function recupNum(){
    try { $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    $tr = $db->prepare('SELECT * FROM numero');
    $tr->execute();
    $trouve = $tr->fetchAll();
    foreach($trouve as $trouve1){
        $retour = $trouve1['numero'];
    }
    return $retour;
}

function miseazero(){
    try { 
        $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }
    $action = 'UPDATE rate SET rate = 0 WHERE 1';
    $db->query($action);
    $action2 = 'UPDATE trouve SET trouve = 0 WHERE 1';
    $db->query($action2);
}

function ajoutun(){
    try { 
        $db = new PDO('mysql:host=localhost;dbname=rechargle;charset=utf8', 'root', '');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }
    $action = 'UPDATE numero SET numero = numero + 1 WHERE 1';
    $db->query($action);
}

?>