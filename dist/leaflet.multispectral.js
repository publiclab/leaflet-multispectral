function LeafletMultispectral() {

  function filter(cmds) {

    var imageOverlay = this,
        src = imageOverlay._url;

    var sequencer = ImageSequencer();

    function onLoad() {
      // here, we use importString, but in the future we can 
      // accept multiple types of inputs using 
      // https://github.com/publiclab/image-sequencer/issues/731
      sequencer.importString(cmds)
      sequencer.run(function complete(output) {
        imageOverlay.setUrl(output);
      });

      // refactor if there is a more approved way to access these
      imageOverlay.revert = function revert() {
        imageOverlay._url = src;
        imageOverlay._image.src = src;
      }
    }

    sequencer.loadImage(src, onLoad);

    return imageOverlay;

  }

  L.ImageOverlay.include({filter: filter})

}

LeafletMultispectral();
