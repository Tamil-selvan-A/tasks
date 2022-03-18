<!DOCTYPE html>
<html lang="en">

<head>
    <!--========== META TGAS ==========-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration form</title>
    <!--========== BOOTSTRAP CSS ==========-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!--========== GOOGLE FONT ==========-->
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet">
    <!--========== TOASTR CSS ==========-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <!--========== FONT AWESOME ==========-->
    <script src="https://kit.fontawesome.com/d857be8293.js" crossorigin="anonymous"></script>
    <!--========== CUSTOM CSS ==========-->
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <!--========== MAIN CONTENTS ==========-->
    <main>
        <!--========== FORM SECTION ==========-->
        <section class="bg-dark pt-4 pb-5 px-3">
            <h4 class="text-center text-white my-5">REGISTER FORM</h4>
            <form method="post" enctype="multipart/form-data" id="form" class="mx-auto bg-white p-5 rounded">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group mb-5">
                            <input type="text" name="name" id="name" class="form-control" placeholder="Enter Your Name">
                            <small id="name-error" class="text-muted p-1"></small>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mb-5">
                            <input type="email" name="email" id="email" class="form-control" placeholder="Enter Your Email">
                            <small id="email-error" class="text-muted p-1"></small>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group mb-5">
                            <input type="text" name="mobile" id="mobile" class="form-control number" placeholder="Enter Your Mobile">
                            <small id="mobile-error" class="text-muted p-1"></small>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mb-5">
                            <input type="text" name="username" id="username" class="form-control" placeholder="Create Username">
                            <small id="username-error" class="text-muted p-1"></small>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group mb-5">
                            <input type="password" name="password" id="password" class="form-control" placeholder="Create Password">
                            <small id="password-error" class="text-muted p-1"></small>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mb-5">
                            <input type="password" name="re-password" id="re-password" class="form-control" placeholder="Retype Password">
                            <small id="re-password-error" class="text-muted p-1"></small>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-5">
                    <label for="image" class="form-control" id="img-label">Upload Your Photo</label>
                    <input type="file" accept="image/*" name="image" id="image" class="d-none">
                    <small id="image-error" class="text-muted p-1">Accepted file formats : jpeg, jpg, png</small>
                </div>
                <input type="submit" value="REGISTER" class="btn btn-outline-secondary px-5 mx-auto d-block">
            </form>
        </section>
        <!--========== END FORM SECTION ==========-->
    </main>
    <!--========== END MAIN CONTENTS ==========-->

    <!--========== JQUERY ==========-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!--========== POPPER JS ==========-->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <!--========== BOOTSTRAP JAVASCRIPT ==========-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!--========== TOASTR JS ==========-->
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <!--========== CUSTOM JAVASCRIPT ==========-->
    <script src="assets/js/script.js"></script>

</body>

</html>