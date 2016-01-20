# rtc-everywhere [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]

<img src="https://i.imgur.com/xDnqJCo.gif" align="center"/>

## What is this?

Sick of the incompatible mess of vendor prefixes, adapters, plugins, extensions, and native modules? rtc-everywhere gives you spec-compliant WebRTC in as many environments as possible, all with the same simple code.

### Supported Environments

#### :computer: Desktop

- Chrome
- Firefox
- MS Edge [Partial]
  - No data channels
- Safari 7+
  - Requires Temasys Plugin
- Internet Explorer 9+ [In Progress]
  - Requires Temasys Plugin

#### :iphone: Mobile

- Android 5+
- Cordova iOS
  - Requires cordova-iosrtc
- Cordova Android
  - Requires cordova-crosswalk
- react-native iOS/Android [In Progress]
  - Requires react-native-webrtc

#### Other

- Node.js 0.10+ (via wrtc) [In Progress]

### Getting Started

```
npm install rtc-everywhere --save
```

```js
var rtc = require('rtc-everywhere')();

// Available:
// rtc.RTCPeerConnection
// rtc.RTCIceCandidate
// rtc.RTCSessionDescription
// rtc.getUserMedia
// rtc.attachStream(stream, videoElement)
```

:crystal_ball: Want a more detailed example that uses these functions? Check out the [loopback stream example!](https://github.com/contra/rtc-everywhere/blob/master/examples/loopback/index.js)

### API
#### RTCPeerConnection

Exactly the same as the specification. See the [Specification Documentation](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)!

#### RTCIceCandidate

Exactly the same as the specification. See the [Specification Documentation](http://html5index.org/WebRTC%20-%20RTCIceCandidate.html)!

#### RTCSessionDescription

Exactly the same as the specification. See the [Specification Documentation](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription)!

#### getUserMedia(constraints, cb)

Similar to the [specification](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia), but slightly adjusted to have an easier API.

##### Modifications

- `constraints` is optional (makes things easier)
  - Defaults to `{video: true, audio: true}`

- `cb` is a node-style error first callback

```js
// these are the same thing
rtc.getUserMedia(function(err, stream){});
rtc.getUserMedia({video: true, audio: true}, function(err, stream){});
```

#### attachStream(stream, element)

- Attaches a stream to a given video element
- Returns the element the video was attached to
- In IE and Safari, the video element will be replaced by an `object` element
  - Elements will not be replaced or modified unless they exist on the DOM
  - Regardless of replacement, the new `object` element will be returned

### Related Libraries

- [simple-peer](https://github.com/feross/simple-peer)
- [blob-util](https://github.com/nolanlawson/blob-util)


[downloads-image]: http://img.shields.io/npm/dm/rtc-everywhere.svg
[npm-url]: https://npmjs.org/package/rtc-everywhere
[npm-image]: http://img.shields.io/npm/v/rtc-everywhere.svg
[travis-url]: https://travis-ci.org/contra/rtc-everywhere
[travis-image]: https://travis-ci.org/contra/rtc-everywhere.png?branch=master
[depstat-url]: https://david-dm.org/contra/rtc-everywhere
[depstat-image]: https://david-dm.org/contra/rtc-everywhere.png
[david-url]: https://david-dm.org/contra/rtc-everywhere
[david-image]: https://david-dm.org/contra/rtc-everywhere.png?theme=shields.io
