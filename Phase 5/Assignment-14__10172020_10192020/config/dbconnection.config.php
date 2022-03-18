<?php  

// INCLUDE CONFIG FILE 
require_once 'database.config.php';

/*
* Database class
*
* Creates the database instance with PDO
*
* @package      Test
* @category     Resourses
* @version      Rev 0.1
*
*/

// CREATE A DATABASE CONNECTION
class Database {
    function __construct() {

        // DATA SOURSE NAME 
        $dsn = "mysql:host=". DB_HOST . ";dbname=" . DB_NAME . ";";

        try {
            $this->instance = new PDO($dsn, DB_USER, DB_PASS, array(PDO:: ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));
        }

        catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
}

?>