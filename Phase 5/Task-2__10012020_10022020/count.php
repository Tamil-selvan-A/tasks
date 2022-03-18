<?php
include 'includes/header.inc.php';
include 'includes/nav.inc.php';

$char = isset($_POST["char"]) && !empty($_POST["char"]) ? $_POST["char"] : 'w';
$word = isset($_POST["word"]) && !empty($_POST["word"]) ? $_POST["word"] : 'word';

?>

<!--========== COUNT CHARACTER SECTION ==========-->
<section class="bg-dark py-3">
    <h4 class="text-center text-white mb-4">COUNT CHARACTER</h4>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" class="mx-auto p-4 py-5 bg-white rounded shadow my-3">
        <div class="form-group">
            <label for="char">Character</label>
            <input type="text" class="form-control" name="char" id="char" placeholder="Enter Character">
            <small class="form-text text-muted"></small>
        </div>
        <div class="form-group">
            <label for="word">word</label>
            <input type="text" class="form-control" name="word" id="word" placeholder="Enter word">
            <small class="form-text text-muted"></small>
        </div>

        <input type="submit" value="SUBMIT" class="btn btn-primary px-5 mx-auto d-block">
    </form>
    <div class="text-center bg-light mx-5 mt-5 pb-3">
        <p class="bg-success text-white p-2">OUTPUT</p>
        <p>
            <?php
            echo" Word You entered: ".$word .'<br><br>';
            echo" Character You entered: ". $char .'<br><br>';
            echo "The count is: " . substr_count($word, $char);
            ?>
        </p>
    </div>
</section>
<!--========== END COUNT CHARACTER SECTION ==========-->

<?php
include 'includes/footer.inc.php';
?>