<?php
use thipages\jsbuild\JSBuild;
require('./vendor/autoload.php');
$builder=new JSBuild();
//$builder::writeBuildModel();
$builder->writeBuild();

