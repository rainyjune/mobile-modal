;(function(factory){
  if(typeof define === "function" && define.cmd) {
    
  } else {
    factory(jQuery);
  }
}(function($){
    $.fn.mobileModal = function(){
      
      var rootElementId = "mobileModal";
      var self = this;
      var rootElement;

      function buildContainer() {
        if (modalRootElement) {
          return;
        }
        var modalRootElement = $("<div id='"+rootElementId+"'>");
        var modalContainer = $("<div class='container'>");
        modalContent = $("<div class='content'>");
        
        modalContainer.append(modalContent);
        modalRootElement.append(modalContainer);
        
        $("body").prepend(modalRootElement);
        rootElement = $("#"+rootElementId);
      }
      
      function setModalImage(imgObj) {
        var imgElement = $("<img src='"+imgObj.src+"' alt='"+imgObj.alt+"' />");
        rootElement.find('.content').html(imgElement);
        rootElement.show();
      }
      
      function showModalImg(e) {
        var largeImgUrl = $(this).attr("data-largeImgUrl");
        var largeImgAlt = $(this).attr("data-largeImgAlt");
        setModalImage({
          src: largeImgUrl,
          alt: largeImgAlt
        });
        return false;
      }
      
      function addEventListeners() {
        
        self.on("click", showModalImg);
      }
      
      
      function init() {
        buildContainer();
        addEventListeners();
      }
      
      init();
      return this;
    }
}));