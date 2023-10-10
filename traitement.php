<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $pseudo = $_POST["pseudo"];
    $position = $_POST["position"];
    $region = $_POST["region"];

    // Traiter les données du formulaire
    // ... Vous pouvez effectuer ici les actions nécessaires, 
    // comme enregistrer les données dans une base de données, envoyer un e-mail, etc.

    // Exemple d'affichage des données récupérées
    echo "Pseudo : " . $pseudo . "<br>";
    echo "Dernier poste connu : " . $position . "<br>";
    echo "Région : " . $region . "<br>";
}

var_dump($position);
var_dump($region);

console_log($position);
header("Location: page3.html");
exit();
?>