var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

function generateBuildings() {
  var buildings = $('.buildings');

  buildings.each(function(index) {
    var self = $(this),
      parentBlock = self.parent('.block'),
      buildingsLength = (parentBlock.hasClass('double-wide')) ? 18 : 9;

    for (var i = 0; i < buildingsLength; i++) {
      var randomDepth = Math.floor(Math.random() * 10) + 5,
        building = $('<div class="building" data-depth="' + randomDepth + '">');

      self.append(building);
    }
  });
}

function extrudeBuildings() {
  var building = $('.building');

  building.each(function(index) {
    var self = $(this),
      depth = self.data('depth');

    for (var i = 0; i < depth; i++) {
      var extrusion = $('<span class="extrusion">');

      extrusion.css({
        'z-index': i * -1,
        'transform': 'translate3d(0,0,' + i * 0.25 + 'vw)',
        'z-index': i
      });

      self.append(extrusion);
    }
  });
};

generateBuildings();
extrudeBuildings();
