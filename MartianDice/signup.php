<?php require 'includes/header.php' ?>

<main class="signupmain">
  <h1 class="signup-header"> Sign Up! </h1>

  <div class="row">
    <div class="col-3 signupformstyle">

      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fas fa-user signupicon"> </i>
      &emsp;<label for="username"> Username: </label><br><br>


      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fas fa-at signupicon"> </i>
      &emsp;<label for="mail"> E-mail: </label><br><br>


      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fas fa-key signupicon"> </i>
      &emsp;<label for="pwd"> Password: </label><br><br>


      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fas fa-key signupicon"> </i>
      &emsp;<label for="pwd-confirm"> Confirm: </label>

    </div>
    <div class="col-3 signupformstyle">
      <form class="signupform" action="includes/signup.inc.php" method="post">

        <input type="text" name="username" placeholder="Username"><br><br>

        <input type="text" name="mail" placeholder="E-mail"><br><br>

        <input type="password" name="pwd" placeholder="Password"><br><br>

        <input type="password" name="pwd-confirm" placeholder="Confirm Password"><br><br>

        <button class="signupbutton" type="submit" name="submit-signup"> Join Us! </button>
      </form>
    </div>
    <div class="col-6">
      <img class="signup-picture" src="assets/images/signupmartian.png" alt="Martian Monster">
    </div>


  </div> <!-- end of row -->

</main>

<?php require 'includes/footer.php' ?>
