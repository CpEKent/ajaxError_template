<?php
$post_data_1 = $_POST['post_data_1'];
$post_data_2 = $_POST['post_data_2'];

$return_array = array($post_data_1, $post_data_2);

header('Content-type:application/json; charset=utf8');

echo json_encode($return_array);

?>