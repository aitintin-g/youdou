<?php
require 'define.php';
$id=$_GET["id"];
$query=mysql_query("select number from animation where id={$id}") or die('SQL错误!');
$row=mysql_fetch_array($query,MYSQL_ASSOC);
echo $row['number'];
mysql_close();
?>