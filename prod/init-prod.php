<?php
	// Error Reporting
	ini_set('display_errors', 'Off');
    error_reporting(0);
	$protocol 	= isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) ? 'https://' : 'http://';
	$host 		= $_SERVER['HTTP_HOST'];
	$uri 		= $_SERVER['REQUEST_URI'];
	$dir		= $uri;

	if (strpos($uri, '/en/') != false) {
		$dir =  substr($uri, 0, strpos($uri, '/en/'));
	} elseif (strpos($uri, '/ar/') != false) {
		$dir =  substr($uri, 0, strpos($uri, '/ar/'));
	}

	$path 	= $protocol . $host . $dir;
	$tpl 	= './templates/'; // Template Directory
	$lang 	= './lang/'; // Language Directory
	$css 	= $path . '/css/'; // Css Directory
	$js 	= $path . '/js/'; // Js Directory
	$ast	= $path . '/assets/'; // Assets Directory
	$lng  	= 'en';

	if (isset($_GET['lang']) && $_GET['lang'] != '') {
		$lng = ($_GET['lang'] == 'ar') ? 'ar' : 'en';
	}

	function redirect($p) {
		global $lng;
		global $path;
		$page = ($p != 'index') ? '/' . $p : '';
		return $path . '/' . $lng . $page;
	}
	function changeLang() {
		global $lng;
		global $path;
		global $uri;
		global $dir;

		if ((isset($_GET['lang']) && $_GET['lang'] == 'ar') || $lng == 'ar') {
			return $path . str_replace('/ar', '/en', str_replace($dir, '', $uri));
		} elseif (isset($_GET['lang']) && $_GET['lang'] == 'en') {
			return $path . str_replace('/en', '/ar', str_replace($dir, '', $uri));
		} else {
			return $path . 'ar' . str_replace($dir, '', $uri);
		}
	}

	require_once $lang . $lng . '.php';