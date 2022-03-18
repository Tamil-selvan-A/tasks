<!--========== PHP STARTS ==========-->
<?php
$path = "test.txt";
$numbers = array(1, 2, 3, 4, 5, 5);
$file_name = basename($path, ".txt");
$email = isset($_GET["email"]) && !empty($_GET["email"]) ? $_GET["email"] : '';
$number = isset($_GET["number"]) && !empty($_GET["number"]) ? $_GET["number"] : 5;
$number_one = isset($_GET["number-one"]) && !empty($_GET["number-one"]) ? $_GET["number-one"] : 5;
$number_two = isset($_GET["number-two"]) && !empty($_GET["number-two"]) ? $_GET["number-two"] : 5;

switch (strtolower($email)) {
    case 'one':
        $digit = 1;
        break;
    case 'two':
        $digit = 2;
        break;
    case 'three':
        $digit = 3;
        break;
    case 'four':
        $digit = 4;
        break;
    case 'five':
        $digit = 5;
        break;
    case 'six':
        $digit = 6;
        break;
    case 'seven':
        $digit = 7;
        break;
    case 'eight':
        $digit = 8;
        break;
    case 'nine':
        $digit = 9;
        break;
    case 'zero':
        $digit = 0;
        break;
    default:
        $digit = "Please enter a word between zero to nine";
}
?>
<!--========== PHP ENDS ==========-->

<!--========== HTML STARTS ==========-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Task one</title>

    <!--========== BOOTSTRAP CSS ==========-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!--========== CUSTOM CSS ==========-->
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <!--========== MAIN ==========-->
    <main class="container bg-light text-center">
        <!--========== FORM SECTION ==========-->
        <section>
            <h5 class="text-center py-5">PHP BASIC TASKS</h5>
            <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" class="mx-auto">
                <div class="form-group">
                    <label for="email">Enter Your Email or String <small>( Common for task 4 & task 6 )</small></label>
                    <input type="text" class="form-control" name="email" id="email">
                </div>
                <div class="form-group">
                    <label for="number">Enter Number to find Greater than 30 or 20 or 10 <small>( task 3 )</small></label>
                    <input type="number" class="form-control" name="number" id="number" min="0">
                </div>
                <label>Enter Number one and two <small>( task 7 )</small></label>
                <div class="row">
                    <div class="col">
                        <input type="number" class="form-control" placeholder="Number one" name="number-one" min="0" required>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control" placeholder="Number two" name="number-two" min="0" required>
                    </div>
                </div>
                <input type="submit" value="SUBMIT" class="btn btn-success my-3">
            </form>
        </section>
        <!--========== END FORM SECTION ==========-->

        <!--========== TASK SECTION ==========-->
        <section>
            <!--========== TASK ONE ==========-->
            <h6 class="mt-5">1.Task One <small>(Last modified info)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    echo "File modified time is: " . date("F d Y H:i:s.", filemtime("test.txt")) . "<br>";
                    ?>
                </p>
            </div>
            <!--========== END TASK ONE ==========-->

            <!--========== TASK TWO ==========-->
            <h6 class="mt-5">2.Task Two <small>(Number of lines in the file)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    echo "Number of lines in the file test is: " . count(file($path)) . "<br>";
                    ?>
                </p>
            </div>
            <!--========== END TASK TWO ==========-->

            <!--========== TASK THREE ==========-->
            <h6 class="mt-5">3.Task Three <small>(Number is greater than 30 or 20 or 10)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    echo ($number < 10) ? "$number is Smaller than 10" : (($number < 20) ? "$number is Greater than 10" : (($number < 30) ? " $number is Greater than 20" : " $number is Greater than 30")) . "<br>";
                    ?>
                </p>
            </div>
            <!--========== END TASK THREE ==========-->

            <!--========== TASK FOUR ==========-->
            <h6 class="mt-5">4.Task Four <small>(String to Digits)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    echo "The string $email has Digits: " . $digit . "<br>";
                    ?>
                </p>
            </div>
            <!--========== END TASK FOUR ==========-->

            <!--========== TASK FIVE ==========-->
            <h6 class="mt-5">5.Task Five <small>(Remove dublicate from an array)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    echo "Original Array is <br>";
                    print_r($numbers);
                    echo "<br><br>";
                    echo "Duplicate removed Array is <br>";
                    print_r(array_unique($numbers));
                    ?>
                </p>
            </div>
            <!--========== END TASK FIVE ==========-->

            <!--========== TASK SIX ==========-->
            <h6 class="mt-5">6.Task Six <small>(Email validation)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        echo ("Your email address $email is valid");
                    } else {
                        echo ("Your email address $email is invalid");
                    }
                    ?>
                </p>
            </div>
            <h6 class="mt-5">7.Task Seven <small>(Digit of sum of two numbers)</small></h6>
            <div class="bg-white shadow output my-3 p-2">
                <p class="font-weight-bold">OUTPUT</p>
                <p>
                    <?php
                    echo "Number one is $number_one . <br>";
                    echo "Number two is $number_two . <br>";
                    echo "Sum of the Numbers: " . ($number_one + $number_two) . "<br>";
                    echo "Digits of Sum of the Numbers: " . strlen($number_two + $number_two) . "<br>";
                    ?>
                </p>
            </div>
            <!--========== END TASK SIX ==========-->
        </section>
        <!--========== END SECTION ==========-->
    </main>
    <!--========== END MAIN ==========-->

    <!--========== JQUERY ==========-->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <!--========== POPPER JS ==========-->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <!--========== BOOTSTRAP JAVASCRIPT ==========-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>

</html>
<!--========== HTML ENDS ==========-->