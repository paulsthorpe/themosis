<?php
/*
Plugin Name: Themosis Scaffolding
Version: 1.0
Description: Plugin to create WP-CLI commands to scaffold new controllers,
models etc in a themosis project
Author: Konstantinos Kouratoras
Author URI: http://www.kouratoras.gr
*/

if( defined( 'WP_CLI' ) && WP_CLI ) {

  class Make {

    /**
    *
    * @subcommand hello
    *
    **/
    function hello() {

      return 'hello';
    }



}

WP_CLI::add_command( 'make', 'Make' );


}
