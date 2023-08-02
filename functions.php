<?php
// Agregar soporte para imágenes destacadas
add_theme_support('post-thumbnails');

// Registrar menús personalizados
register_nav_menus(array(
  'primary-menu' => 'Menú Principal',
  'footer-menu' => 'Menú de Pie de Página',
));

// Función para agregar estilos y scripts personalizados
function custom_theme_scripts() {
  wp_enqueue_style('custom-style', get_stylesheet_uri());
  wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/custom.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'custom_theme_scripts');

// Función para obtener la fecha de término del contador
function get_end_date() {
  return '2023-08-30 00:00:00'; // Fecha de término en formato YYYY-MM-DD HH:MM:SS
}
