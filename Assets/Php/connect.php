<?php
$email =$_POST['email'];
$servername = "localhost";
$database = "u976940910_IGNIS_C";
$username = "u976940910_Console45";
$password = "Heymorgan22@";

$conn = new mysqli($servername, $username, $password, $database);

 if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into Email List(Email)values(?)")
    $stmt->bind_param("s",$email);
    $stmt-> execute();
    echo "Subscribed"
    $stmt->close()
    
$conn->close(); 
}




?>