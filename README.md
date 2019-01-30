# Leaflet.Multispectral

This [Leaflet](https://leafletjs.org) plugin provides multispectral channel manipulation and processing tools (such as NDVI or other remote sensing methods) for Leaflet tile and image layers using pure client-side JavaScript. It uses [image-sequencer](https://github.com/publiclab/image-sequencer) and was developed by [Public Lab](https://publiclab.org).

It is available as a [node module](https://npmjs.com/package/leaflet-multispectral) as `leaflet-multispectral`.

![demo.png](https://github.com/publiclab/leaflet-multispectral/blob/main/demo.png?raw=true)

## Usage

See the demo for basic usage: https://publiclab.github.io/leaflet-multispectral/

```js
// create an image
var img = L.imageOverlay('example.jpg', [[29.0, -118.2],[29.1, -118.4]]);

// apply NDVI equation to the image, and then a colormap:
img.filter('ndvi,colormap');

img.addTo(map);

```

To revert the image, use `img.revert()`. Then you can apply a new filter. 


## Image Sequencer

Commands you can pass into the filter are extremely flexible; they are Image Sequencer string syntax (full object notation coming soon). Read about Image Sequencer and how to use it here:

https://github.com/publiclab/image-sequencer

Using the visual editor, you can develop a command string to pass into this filter:

https://sequencer.publiclab.org


## About Multispectral imagery

Learn about multi-band imagery, some of it's uses at this great blog post by Charlie Lloyd of Mapbox:

https://blog.mapbox.com/putting-landsat-8s-bands-to-work-631c4029e9d1

Here's some sources of Landsat 8 data: 

* https://www.mapbox.com/bites/00145/
* https://aws.amazon.com/blogs/aws/start-using-landsat-on-aws/

Here's more on NDVI and DIY techniques to collect multi-band imagery: https://publiclab.org/infragram


