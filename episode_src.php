<?php
require 'define.php';
$id=$_GET["id"];
$index=$_GET["user"];
$query=mysql_query("select numsrc from episode where id={$id}") or die('SQL错误!');
$row=mysql_fetch_array($query,MYSQL_ASSOC);
$a=$row["numsrc"];
$a=stripslashes($a);
$arr=explode("-",$a);
echo $arr[$index];
mysql_close();
?>