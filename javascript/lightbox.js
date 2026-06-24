$(document).ready(function () {
 // When any gallery image is clicked, show it enlarged in the overlay
 $(".gallery-container img").on("click", function () {
   var imgSrc = $(this).attr("src");
   $("#lightbox-img").attr("src", imgSrc);
   $("#lightbox-overlay").css("display", "flex").hide().fadeIn(200);
 });

 // Close the lightbox when the × is clicked
 $("#lightbox-close").on("click", function () {
   $("#lightbox-overlay").fadeOut(200);
 });

 // Also close it if user clicks the dark background (not the image itself)
 $("#lightbox-overlay").on("click", function (e) {
   if (e.target === this) {
     $("#lightbox-overlay").fadeOut(200);
   }
 });
});
