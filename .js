   

<script src="ruta/a/jquery.js"></script>
        $(document).ready(function() {
            $('#carouselExampleDark').
  
                // Código JavaScript para activar el acordeón
                $('#ofrecemos').on('show.bs.collapse', function () {
                    $(this).addClass('in');
                });

            $('#ofrecemos').on('hide.bs.collapse', function () {
                $(this).removeClass('in');
            });        