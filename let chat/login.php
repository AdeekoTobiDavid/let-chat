<?php
session_start();
if(isset($_SESSION['unique_id'])){ //if user is logged in
    header("location: users.php");
}
?>
<?php include_once "header.php"; ?>
    <body>
        <div class="wrapper">
            <section class="form login">
            <header>Realtime Chat App</header>
            <form action="#" autocomplete="off">
            <div class="error-text"></div>
    <div class="field input">
    <label>Email Address</label>
    <input type="text" name="email" placeholder="Enter your email">
    </div>
    <div class="field input">
        <label>password</label>
        <input type="password" name="password" placeholder="Enter new password">
        <i class='fa fa-eye'></i>
        </div>
            <div class="field button">
        <input type="submit" value="continue to chat">
            </div>
</form>

<div class="link">not yet signed up? <a href="index.php">signup now</a></div>
</section>

</div>
<script src="javascript\pass-show-hide.js"></script> 
<script src="javascript\login.js"></script> 
</body>
</html>