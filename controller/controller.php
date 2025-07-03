<?php
 
$opcion = $_GET['opc'] ?? null;
 
switch ($opcion) {
    case '1':
        include("../View/Quienessomos.html");
        break;
    case '2':
        include("../View/VMostrar.html");
        break;
    
}
?>