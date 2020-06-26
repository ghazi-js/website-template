<!DOCTYPE html>
<html lang="<?= $lng ?>" dir="<?= $lng == 'ar' ? 'rtl' : 'ltr' ?>">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="<?= lang('metaTitle') ?>" />
    <meta name="description" content="<?= lang('metaDesc') ?>" />
    <meta name="abstract" content="<?= lang('metaDesc') ?>" />
    <meta name="keywords" content="<?= lang('metaKeywords') ?>" />
    <meta name="author" content="" />
    <meta name="identifier-url" content="" />
    <meta name="language" content="EN" />
    <meta name="copyright" content="" />
    <meta name="robots" content="All" />
    <meta name="theme-color" content="" />
    <link rel="canonical" href="" />

    <!-- Facebook and Twitter integration -->
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:description" content="<?= lang('metaDesc') ?>" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:image" content="" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />

    <title><?= $title ?></title>
    <link rel="icon shortcut" href="<?= $ast ?>images/favicons.ico" />
<?php
    foreach ($styles as $style)
        echo '<link rel="stylesheet" href="' . $css . $style . '" />';

?>
    <!!-- google_analytics -->
</head> 

<body class="<?= $rootClasses ?> <?= $lng == 'ar' ? 'bootstrap-rtl' : '' ?> pg-loading">

<?php

    require_once $tpl . 'navbar.php';