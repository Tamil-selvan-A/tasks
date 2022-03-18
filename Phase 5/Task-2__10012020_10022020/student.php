<!--========== PHP STARTS ==========-->
<?php

$name = isset($_POST["name"]) && !empty($_POST["name"]) ? $_POST["name"] : '';
$reg_no = isset($_POST["reg-no"]) && !empty($_POST["reg-no"]) ? $_POST["reg-no"] : '';
$class = isset($_POST["class"]) && !empty($_POST["class"]) ? $_POST["class"] : '';
$total = isset($_POST["mark"]) && !empty($_POST["mark"]) ? $_POST["mark"] : '';
$result = isset($_POST["result"]) && !empty($_POST["result"]) ? $_POST["result"] : '';

$array = array("Name" => $name, "Reg no" => $reg_no, "Class" => $class, "Total" => $total, "Result" => $result);
$object = json_encode(array($array));

?>
<?php
include 'includes/header.inc.php';
include 'includes/nav.inc.php';
?>
<!--========== PHP ENDS ==========-->

<!--========== STUDENT DETAILS SECTION ==========-->
<section class="bg-dark py-3">
  <h4 class="text-center text-white mb-4">STUDENT DETAILS</h4>
  <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" class="mx-auto p-4 py-5 bg-white rounded shadow my-3">
    <div class="form-group">
      <label for="name">Student Name</label>
      <input type="text" class="form-control" name="name" id="name" placeholder="Enter name">
      <small class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="reg-no">Reg No</label>
      <input type="number" class="form-control" name="reg-no" id="reg-no" placeholder="Enter Register number">
      <small class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="class">Class</label>
      <input type="number" class="form-control" name="class" id="class" placeholder="Enter Class">
      <small class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="class">Total Mark</label>
      <input type="number" class="form-control" name="mark" id="mark" placeholder="Enter Mark">
      <small class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="result">Result</label>
      <input type="text" class="form-control" name="result" id="result" placeholder="Enter P or F">
      <small class="form-text text-muted"></small>
    </div>
    <input type="submit" value="SUBMIT" class="btn btn-primary px-5 mx-auto d-block">
  </form>
  <div class="text-center bg-light mx-5 mt-5 pb-3">
    <p class="bg-success text-white p-2">OUTPUT</p>
    <p><?php print_r($object); ?></p>
  </div>
</section>
<!--========== END STUDENT DETAILS SECTION ==========-->

<?php
include 'includes/footer.inc.php';
?>