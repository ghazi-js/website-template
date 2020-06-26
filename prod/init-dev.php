<?php
	// Error Reporting
	ini_set('display_errors', 'On');
    error_reporting(true);
    
    $tpl 	= 'templates/'; // Template Directory
	$lang 	= './lang/'; // Language Directory
	$css 	= './css/'; // Css Directory
	$js 	= './js/'; // Js Directory
	$ast	= './assets/'; // Assets Directory

	// Make Default Language is Arabic for Saudi Arabia Visitors
	$lng = 'en';

	if (isset($_GET['lang']) && $_GET['lang'] != '') {
		$lng = ($_GET['lang'] == 'ar') ? 'ar' : 'en';
	}
	
	function redirect($path) {
		global $lng;
		$params = explode('/', $path);
		$path = array_shift($params);
		$operator = (count($params) > 0) ? '&' : '';
		$qs = '';
		$i = 1;
		foreach ($params as $key => $val) {
			$qs .= 'id=' . $val;
			if (count($params) > $i) {
				$qs .= '&';
			}
			$i++;
		}
		return $path . '.php?lang=' . $lng . $operator . $qs;
	}
	function changeLang() {
		global $lng;

		// Build Query String without the language
		$params = $_GET;
		$qs = '';
		if (isset($params['lang'])) unset($params['lang']);
		if (count($params) > 0) {
			$qs = '?';
			$i = 1;
			foreach ($params as $key => $val) {
				$qs .= $key . '=' . $val;
				if (count($params) > $i) {
					$qs .= '&';
				}
				$i++;
			}
		}
		// Switch URL language
		$op = ($qs != '') ? '&' : '';
		if ((isset($_GET['lang']) && $_GET['lang'] == 'ar') || $lng == 'ar') {
			
			return $_SERVER['PHP_SELF'] . '?lang=en' . $op . $qs;
		} else {
			return $_SERVER['PHP_SELF'] . '?lang=ar' . $op . $qs;
		}
	}

	require_once $lang . $lng . '.php';