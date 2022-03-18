<?php

// INCLUDE REQUIRED FILES
require_once '../includes/definitions.inc.php';
require_once '../_init.php';

$_DATABASE = new Database;
$_DB = $_DATABASE->instance;

// EXIT IF POST METHOD NOT USED
if (empty($_SERVER['REQUEST_METHOD']) || ($_SERVER['REQUEST_METHOD'] != 'POST')) {
    exit(json_encode([
        "status"    => 'Error',
        "code"      => '400.1',
        "message"   => "Bad Request."
    ]));
}

// CHECK FOR ACTION FROM USER
if (isset($_POST['action']) && $_POST['action'] == 'login') {

    // GET USERNAME AND PASSWORD FROM FORM
    $username = (isset($_POST['uname']) && !empty($_POST['uname'])) ? strip_tags(htmlspecialchars(trim($_POST['uname']))) : '';
    $password = (isset($_POST['password']) && !empty($_POST['password'])) ? strip_tags(htmlspecialchars(trim($_POST['password']))) : '';

    // CONFIRM USERNAME AND PASSWORD IS NOT EMPTY
    if (!empty($username) && !empty($password)) {

        try {

            // CHECK GIVEN USERNAME EXISIS OR NOT IN DB
            $get_user = $_DB->prepare("SELECT * from " . TBL_USERS . " WHERE user_name = :username");
            $get_user->execute([
                ':username' => $username
            ]);

            if ($get_user->rowCount() > 0) {

                $get_user_row = $get_user->fetch(PDO::FETCH_ASSOC);

                $get_user_username = $get_user_row["user_name"];
                $get_user_password = $get_user_row["password"];

                // CHECK PASSWORDS MATCH OR NOT
                if (!empty($get_user_password)) {

                    if (password_verify($password, $get_user_password)) {

                        $get_user_id = $get_user_row["user_id"];

                        // UPDATE LAST LOGIN TIME
                        try {
                            $update_user = $_DB->prepare("UPDATE from " . TBL_USERS . " SET last_login_at = NOW()
                                                        WHERE user_id = :user_id");
                            $update_user->execute([":user_id"  =>  $get_user_id]);
                        } catch (PDOException $e) {
                            error_log('Database error' . "\r\n" . __FILE__ . ' in ' . __LINE__ . "\r\n" .
                                'Error: ' . $e->getMessage() . "\r\n");
                        }

                        // SET SESSION VARIABLES
                        $_SESSION['user'] = array(
                            'user_id'   => $get_user_id,
                            'username'  => $get_user_row['user_name'],
                        );

                        $_SESSION['is_authenticated'] = TRUE;
                        $_SESSION['last_activity'] = time();

                        exit(json_encode([
                            'status'    => 'Success',
                            'code'      => '200',
                            'message'   => 'Login success',
                            'redirect'  => 'home'
                        ]));
                    } else {
                        exit(json_encode([
                            "status"    => "Error",
                            "code"      => "401.3",
                            "message"   => "Invalid Username or Password"
                        ]));
                    }
                }
            } else {
                exit(json_encode([
                    "sataus"    => "Error",
                    "code"      => "401.1",
                    "message"   => "Invalid username or password"
                ]));
            }
        } catch (PDOException $e) {
            error_log($e->getMessage());
        }
    }
}
