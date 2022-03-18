<?php   
require_once 'includes/definitions.inc.php';
require_once 'config/dbconnection.config.php';

if(session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>