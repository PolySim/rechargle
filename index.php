<!DOCTYPE html> 

<html xmlns="http://www.w3.org/1999/xhtml" lang="fr">

<head>
    <title>Rechargle - Find the celebrity before the battery is discharged</title>
    <meta charset="UTF-8"/> 
    <meta name="author" content="DESDEVISES Simon, MARIE Enzo"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="rechargle, wordle, play"/>
    <meta name="description" content="Search from a daily available image a celebrity before the battery of the virtual phone is completely discharged. The number of tries is therefore randomly limited."/>
    <meta name="language" content="en_GB"/>

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#28354d">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="#ffffff">
    
    <link rel="stylesheet" type="text/css" href="style/rechargle.css?version=2.5" /> 
    <script src="https://code.jquery.com/jquery.js" type="text/javascript"></script> 
    <script src="script/rechargle.js?version=2.5"></script>
    <?php 
    include 'fonction.php' ;
    $tab = returnTab();
    $trouve = recupTrouve();
    $echec = recupEchec();
    $jour = recupJour();
    $num = recupNum();
    ?>
    <script>
        var data = <?php echo json_encode($tab); ?>;
    </script>
    <script>
        var num = <?php echo json_encode($jour); ?>;
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inika&display=swap');
    </style>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    </style>
</head>

<body>
<div id='gauche'>
    <img src="image/iphonee.png" alt="iphone" id="iphone"/>
    <main id="back">
        <div id="barre">
			<img src='image/wifi.png' alt='wifi'/>
			<div>HORIZON</div>
			<div id='heure'><span>10.18</span><span>a.m</span></div>
			<div id='batterie'><span>100</span>%</div>
            <img src='image/1.png' alt='batterie' height='100%'/>
        </div>
        <div id="name">
            <div id="divIcone">
			    <img src='image/logor.png' alt='icone' height='100%'>
            </div>
			<div>Rechargle <span>n°<?php echo $num ?></span></div>
        </div>
		<div id='fond'>
                
		</div>
    </main>
    <a href="https://twitter.com/intent/tweet?text=Can%20you%20be%20better%20than%20me%20today%20?%20Challenge%20me%20now%20!%20🔋%20🔌%20➡️%20https://www.rechargle.com" id="twitter-share-button" data-show-count="false" target="_blank">
        <div>Share on Twitter</div>
        <img src='image/logo.png' alt='logo twitter' height = '100%'/>
    </a>
    <footer>
        <p>
            © 2022 Rechargle — Designed and developed by @enzo.marie & @simon.desdevises
        </p>
        <p>
            Contact : contact@rechargle.com
        </p>
    </footer>
</div>

<div id="droite">
    <h1>RECHARGLE</h1>

    <p id="teaser">
        Guess the celebrity before the phone battery runs out
    </p>

    <div id="regle">
        <p>Game rules :</p>
        <p>1) Guess which celebrity corresponds to the picture before the battery runs out</p>
        <p>2) For each error, you randomly lose between 10 and 20% of battery</p>
        <p>3) You get one new clue when your phone battery goes under 50%</p>
        <p>4) The battery recharges every 24 hours and a new photo appears</p>
    </div>

    <div id="ligneReponse">
        <div id='trouve'>
            <p class="textetrouve"> Already found by : </p> 
            <p id="reussi" class="textetrouve"><span id="nbreussi"><?php echo $trouve ?></span> people</p> 
            <p id="echec" class="textetrouve"><span id="nbechec"><?php echo $echec ?></span> have failed</p>   
        </div>

        <div id="hier">
            <p>Yesterday answer :</p>
            <img src='<?php echo $tab[$jour]['im2'] ?>' alt="<?php echo $tab[$jour]['alt2'] ?>"/>
            <p><?php echo $tab[$jour]['alt2'] ?><p>
        </div>
    </div>
</div>

</body>
</html>