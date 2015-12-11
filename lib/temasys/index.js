'use strict';

var uuid = require('uuid');
var domReady = require('domready');
var crel = require('crel');
var EventEmitter = require('events').EventEmitter;
var getRTC = require('./getRTC');
var createPluginElement = require('./createPluginElement');

var plugin, rtc, loading;
var ee = new EventEmitter();
var pluginId = uuid.v4();
var pageId = uuid.v4();
var onLoadFn = '___$' + pluginId;

// this takes about 272ms to load the plugin
module.exports = function(cb){
  if (rtc) {
    if (cb) cb(null, rtc);
    return;
  }
  loadPlugin();
  if (cb) ee.once('ready', cb);
};

function loadPlugin(){
  if (plugin || loading) return;
  loading = true;
  window[onLoadFn] = handleLoad;
  domReady(function(){
    plugin = createPluginElement({
      pluginId: pluginId,
      pageId: pageId,
      onLoad: onLoadFn
    });
    loading = false;
    crel(document.body, plugin);
  });
}

function handleLoad() {
  delete window[onLoadFn];
  plugin.setPluginId(pageId, pluginId);
  plugin.setLogFunction(console);
  rtc = getRTC(plugin, pageId);
  ee.emit('ready', rtc);
}