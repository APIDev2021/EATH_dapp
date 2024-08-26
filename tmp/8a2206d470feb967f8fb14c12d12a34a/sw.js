import {registerRoute as workbox_routing_registerRoute} from '/app/node_modules/workbox-routing/registerRoute.mjs';
import {NetworkFirst as workbox_strategies_NetworkFirst} from '/app/node_modules/workbox-strategies/NetworkFirst.mjs';
import {ExpirationPlugin as workbox_expiration_ExpirationPlugin} from '/app/node_modules/workbox-expiration/ExpirationPlugin.mjs';
import {CacheFirst as workbox_strategies_CacheFirst} from '/app/node_modules/workbox-strategies/CacheFirst.mjs';
import {StaleWhileRevalidate as workbox_strategies_StaleWhileRevalidate} from '/app/node_modules/workbox-strategies/StaleWhileRevalidate.mjs';
import {RangeRequestsPlugin as workbox_range_requests_RangeRequestsPlugin} from '/app/node_modules/workbox-range-requests/RangeRequestsPlugin.mjs';
import {clientsClaim as workbox_core_clientsClaim} from '/app/node_modules/workbox-core/clientsClaim.mjs';
import {precacheAndRoute as workbox_precaching_precacheAndRoute} from '/app/node_modules/workbox-precaching/precacheAndRoute.mjs';
import {cleanupOutdatedCaches as workbox_precaching_cleanupOutdatedCaches} from '/app/node_modules/workbox-precaching/cleanupOutdatedCaches.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */


importScripts(
  
);







self.skipWaiting();

workbox_core_clientsClaim();


/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute([
  {
    "url": "/_next/static/JBez5o0dT6u_xsRR8KZHu/_buildManifest.js",
    "revision": "8c84b01c6dcdbebe742bccf1e7acdb7d"
  },
  {
    "url": "/_next/static/JBez5o0dT6u_xsRR8KZHu/_ssgManifest.js",
    "revision": "b6652df95db52feb4daf4eca35380933"
  },
  {
    "url": "/_next/static/chunks/084bda8b.675048f9a527facd.js",
    "revision": "675048f9a527facd"
  },
  {
    "url": "/_next/static/chunks/084bda8b.675048f9a527facd.js.map",
    "revision": "3adc14a8eb5407aca049252ca3b099e5"
  },
  {
    "url": "/_next/static/chunks/1134-f1edfac271d26e5d.js",
    "revision": "f1edfac271d26e5d"
  },
  {
    "url": "/_next/static/chunks/1134-f1edfac271d26e5d.js.map",
    "revision": "e79c7d1bc47fca0b2185fb775c231609"
  },
  {
    "url": "/_next/static/chunks/1270-0734ab044ebb64ed.js",
    "revision": "0734ab044ebb64ed"
  },
  {
    "url": "/_next/static/chunks/1270-0734ab044ebb64ed.js.map",
    "revision": "d33dfd3bd538ffb4a54bc8e89e0f2c66"
  },
  {
    "url": "/_next/static/chunks/1280-7ac89141e3439b3f.js",
    "revision": "7ac89141e3439b3f"
  },
  {
    "url": "/_next/static/chunks/1280-7ac89141e3439b3f.js.map",
    "revision": "f20b2ac6ed04338c106482b29be80aba"
  },
  {
    "url": "/_next/static/chunks/1384.5ecf07230cdeac3e.js",
    "revision": "5ecf07230cdeac3e"
  },
  {
    "url": "/_next/static/chunks/1384.5ecf07230cdeac3e.js.map",
    "revision": "b155f110a35187b6ae921ba1ab17525d"
  },
  {
    "url": "/_next/static/chunks/1506-0144a6536b8db1c3.js",
    "revision": "0144a6536b8db1c3"
  },
  {
    "url": "/_next/static/chunks/1506-0144a6536b8db1c3.js.map",
    "revision": "a37907c6aab4acd238015217c647631d"
  },
  {
    "url": "/_next/static/chunks/1576.3b2c4cae17a82eff.js",
    "revision": "3b2c4cae17a82eff"
  },
  {
    "url": "/_next/static/chunks/1576.3b2c4cae17a82eff.js.map",
    "revision": "72e795008713ff89ad1b2a8438832755"
  },
  {
    "url": "/_next/static/chunks/1588-b199eef3be0d22d1.js",
    "revision": "b199eef3be0d22d1"
  },
  {
    "url": "/_next/static/chunks/1588-b199eef3be0d22d1.js.map",
    "revision": "f1625eb6f0470b2de90dfb5a40d0782f"
  },
  {
    "url": "/_next/static/chunks/1733-6dae128c8882ae62.js",
    "revision": "6dae128c8882ae62"
  },
  {
    "url": "/_next/static/chunks/1733-6dae128c8882ae62.js.map",
    "revision": "f28d25436493bce881bd875460377953"
  },
  {
    "url": "/_next/static/chunks/1780.6df2b5996887458a.js",
    "revision": "6df2b5996887458a"
  },
  {
    "url": "/_next/static/chunks/1780.6df2b5996887458a.js.map",
    "revision": "d9789bba12b3a613b230f92e11fe4cbb"
  },
  {
    "url": "/_next/static/chunks/1799-3dce434e2fe7e2b4.js",
    "revision": "3dce434e2fe7e2b4"
  },
  {
    "url": "/_next/static/chunks/1799-3dce434e2fe7e2b4.js.map",
    "revision": "8e7b9ed37322218440e1933dc5703646"
  },
  {
    "url": "/_next/static/chunks/1864-a108b3603800e036.js",
    "revision": "a108b3603800e036"
  },
  {
    "url": "/_next/static/chunks/1864-a108b3603800e036.js.map",
    "revision": "d59eb0a87c8bfb233ab3a00bed27cbfd"
  },
  {
    "url": "/_next/static/chunks/2000-c850bd696cec2098.js",
    "revision": "c850bd696cec2098"
  },
  {
    "url": "/_next/static/chunks/2000-c850bd696cec2098.js.map",
    "revision": "f18ae09cab455616d4915ee0de5bace2"
  },
  {
    "url": "/_next/static/chunks/2263.600ae5efa48e4833.js",
    "revision": "600ae5efa48e4833"
  },
  {
    "url": "/_next/static/chunks/2263.600ae5efa48e4833.js.map",
    "revision": "93ce1b8b360723c3f963ad047e76a099"
  },
  {
    "url": "/_next/static/chunks/2334.2cd2d70182e67a5d.js",
    "revision": "2cd2d70182e67a5d"
  },
  {
    "url": "/_next/static/chunks/2334.2cd2d70182e67a5d.js.map",
    "revision": "4def1ffa88cb5f95bac78dab12cd838c"
  },
  {
    "url": "/_next/static/chunks/250.a3c28b054d396afb.js",
    "revision": "a3c28b054d396afb"
  },
  {
    "url": "/_next/static/chunks/250.a3c28b054d396afb.js.map",
    "revision": "44dd735883c88abafd6cfca59fb030a9"
  },
  {
    "url": "/_next/static/chunks/2526.0e87be8e84eb52b2.js",
    "revision": "0e87be8e84eb52b2"
  },
  {
    "url": "/_next/static/chunks/2526.0e87be8e84eb52b2.js.map",
    "revision": "96ef472030da6a5297e310037783b152"
  },
  {
    "url": "/_next/static/chunks/2546.d98ab68fa687b7c0.js",
    "revision": "d98ab68fa687b7c0"
  },
  {
    "url": "/_next/static/chunks/2546.d98ab68fa687b7c0.js.map",
    "revision": "99df7dfdd64a59640313a1f1298647eb"
  },
  {
    "url": "/_next/static/chunks/2615.cd4ca347223d657b.js",
    "revision": "cd4ca347223d657b"
  },
  {
    "url": "/_next/static/chunks/2615.cd4ca347223d657b.js.map",
    "revision": "1972319efd41267ca80b39c164a6796d"
  },
  {
    "url": "/_next/static/chunks/2617.8fc21e7490639b83.js",
    "revision": "8fc21e7490639b83"
  },
  {
    "url": "/_next/static/chunks/2617.8fc21e7490639b83.js.map",
    "revision": "5c385d2c772e809accb463d1715e0145"
  },
  {
    "url": "/_next/static/chunks/2674-72d9141ee61fa622.js",
    "revision": "72d9141ee61fa622"
  },
  {
    "url": "/_next/static/chunks/2674-72d9141ee61fa622.js.map",
    "revision": "3c32c5ad19bb626530fb893892bd5a9e"
  },
  {
    "url": "/_next/static/chunks/2677.7861903427aae5fa.js",
    "revision": "7861903427aae5fa"
  },
  {
    "url": "/_next/static/chunks/2677.7861903427aae5fa.js.map",
    "revision": "eb5d5612fed3c2213e0aac888f7b6530"
  },
  {
    "url": "/_next/static/chunks/2721-03484ed4a5ba7909.js",
    "revision": "03484ed4a5ba7909"
  },
  {
    "url": "/_next/static/chunks/2721-03484ed4a5ba7909.js.map",
    "revision": "fdd1d6c4710b1d16d4b26daadfea6805"
  },
  {
    "url": "/_next/static/chunks/2856-a481a5f3ecdc5395.js",
    "revision": "a481a5f3ecdc5395"
  },
  {
    "url": "/_next/static/chunks/2856-a481a5f3ecdc5395.js.map",
    "revision": "c201e77ed1d75ac34c971045bc3012a0"
  },
  {
    "url": "/_next/static/chunks/2894.0f6fafadca77ed13.js",
    "revision": "0f6fafadca77ed13"
  },
  {
    "url": "/_next/static/chunks/2894.0f6fafadca77ed13.js.map",
    "revision": "ceaffad513f6ea09c13a076d8882200e"
  },
  {
    "url": "/_next/static/chunks/2920.b742295c5bf40d76.js",
    "revision": "b742295c5bf40d76"
  },
  {
    "url": "/_next/static/chunks/2920.b742295c5bf40d76.js.map",
    "revision": "43e9b9af2b2e570d066f32242817113f"
  },
  {
    "url": "/_next/static/chunks/2928.24a5a7c6f2f41f01.js",
    "revision": "24a5a7c6f2f41f01"
  },
  {
    "url": "/_next/static/chunks/2928.24a5a7c6f2f41f01.js.map",
    "revision": "b25fde6e17b20bb5c55d728e6c09f7dd"
  },
  {
    "url": "/_next/static/chunks/309-0ef095dd8c1b4cf8.js",
    "revision": "0ef095dd8c1b4cf8"
  },
  {
    "url": "/_next/static/chunks/309-0ef095dd8c1b4cf8.js.map",
    "revision": "3633bf8d695b9d49eb9de57cd0ceba60"
  },
  {
    "url": "/_next/static/chunks/3472-b42f88a4ec81c82a.js",
    "revision": "b42f88a4ec81c82a"
  },
  {
    "url": "/_next/static/chunks/3472-b42f88a4ec81c82a.js.map",
    "revision": "88bdb6f09fe1686bc90dcec5fe796d2a"
  },
  {
    "url": "/_next/static/chunks/3795.772566eecfa5ba77.js",
    "revision": "772566eecfa5ba77"
  },
  {
    "url": "/_next/static/chunks/3795.772566eecfa5ba77.js.map",
    "revision": "84965ab214d59046bbf5b48cba3d54bd"
  },
  {
    "url": "/_next/static/chunks/3850.67944b2a1cc77b2f.js",
    "revision": "67944b2a1cc77b2f"
  },
  {
    "url": "/_next/static/chunks/3850.67944b2a1cc77b2f.js.map",
    "revision": "96266cb04084022503c5d730117419d1"
  },
  {
    "url": "/_next/static/chunks/4099-b8578ac08ce318de.js",
    "revision": "b8578ac08ce318de"
  },
  {
    "url": "/_next/static/chunks/4099-b8578ac08ce318de.js.map",
    "revision": "6e0c00fd33fc9203177613edda0ec3e1"
  },
  {
    "url": "/_next/static/chunks/4134.d562644f12fdfcd3.js",
    "revision": "d562644f12fdfcd3"
  },
  {
    "url": "/_next/static/chunks/4134.d562644f12fdfcd3.js.map",
    "revision": "fb9d237a3e29204765d681037aa7859f"
  },
  {
    "url": "/_next/static/chunks/4182.4dd83925f09c4803.js",
    "revision": "4dd83925f09c4803"
  },
  {
    "url": "/_next/static/chunks/4182.4dd83925f09c4803.js.map",
    "revision": "6e2ce3f3b000f26fe9ae7e8d93028a1a"
  },
  {
    "url": "/_next/static/chunks/4282.8fb11a1fd63d74fe.js",
    "revision": "8fb11a1fd63d74fe"
  },
  {
    "url": "/_next/static/chunks/4282.8fb11a1fd63d74fe.js.map",
    "revision": "de6380d76e9a40b369ac3176e6a372ed"
  },
  {
    "url": "/_next/static/chunks/4325-1c3f4f7900821a35.js",
    "revision": "1c3f4f7900821a35"
  },
  {
    "url": "/_next/static/chunks/4325-1c3f4f7900821a35.js.map",
    "revision": "5387efcf73850be06b74d836b1c6526f"
  },
  {
    "url": "/_next/static/chunks/4378.d662769e9ba0e621.js",
    "revision": "d662769e9ba0e621"
  },
  {
    "url": "/_next/static/chunks/4378.d662769e9ba0e621.js.map",
    "revision": "4b012125c6e1aac8edb7a531356d605e"
  },
  {
    "url": "/_next/static/chunks/4503.f1c040562426d277.js",
    "revision": "f1c040562426d277"
  },
  {
    "url": "/_next/static/chunks/4503.f1c040562426d277.js.map",
    "revision": "1c723367c12f3aae7a63b7ba7d9c2f45"
  },
  {
    "url": "/_next/static/chunks/4522.88288fe53bad7bd2.js",
    "revision": "88288fe53bad7bd2"
  },
  {
    "url": "/_next/static/chunks/4522.88288fe53bad7bd2.js.map",
    "revision": "e0179736a3e9be84e3a9d891da6c8fdb"
  },
  {
    "url": "/_next/static/chunks/4569-e0285edc701b296e.js",
    "revision": "e0285edc701b296e"
  },
  {
    "url": "/_next/static/chunks/4569-e0285edc701b296e.js.map",
    "revision": "691508a604f84c8b6b6d26f5d4039d0e"
  },
  {
    "url": "/_next/static/chunks/4608.3b915ba50845ff19.js",
    "revision": "3b915ba50845ff19"
  },
  {
    "url": "/_next/static/chunks/4608.3b915ba50845ff19.js.map",
    "revision": "9ddf1792a967355dc0cc2c8210d10885"
  },
  {
    "url": "/_next/static/chunks/4614.08bb2a3552c95f75.js",
    "revision": "08bb2a3552c95f75"
  },
  {
    "url": "/_next/static/chunks/4614.08bb2a3552c95f75.js.map",
    "revision": "04d8352364e11b5f28107774ec6c80a7"
  },
  {
    "url": "/_next/static/chunks/4618-a672f9bf086f841f.js",
    "revision": "a672f9bf086f841f"
  },
  {
    "url": "/_next/static/chunks/4618-a672f9bf086f841f.js.map",
    "revision": "b778fcb3871b0a771fa73b3229a148c1"
  },
  {
    "url": "/_next/static/chunks/4624.93730acfad04685b.js",
    "revision": "93730acfad04685b"
  },
  {
    "url": "/_next/static/chunks/4624.93730acfad04685b.js.map",
    "revision": "248834408218d0d25439ec895a4f8c52"
  },
  {
    "url": "/_next/static/chunks/4752.bcc16c9a102cd332.js",
    "revision": "bcc16c9a102cd332"
  },
  {
    "url": "/_next/static/chunks/4752.bcc16c9a102cd332.js.map",
    "revision": "4fdb673a46072444ce48570768829cb2"
  },
  {
    "url": "/_next/static/chunks/4781.55f3e4ca810eeb9e.js",
    "revision": "55f3e4ca810eeb9e"
  },
  {
    "url": "/_next/static/chunks/4781.55f3e4ca810eeb9e.js.map",
    "revision": "fb20f9940250e16304543fbdb2a9bd6b"
  },
  {
    "url": "/_next/static/chunks/4785.cbeaf60fb5abe812.js",
    "revision": "cbeaf60fb5abe812"
  },
  {
    "url": "/_next/static/chunks/4785.cbeaf60fb5abe812.js.map",
    "revision": "34aadb799c2c3751591896999896c1f6"
  },
  {
    "url": "/_next/static/chunks/4800.fecbe0ddf1da3233.js",
    "revision": "fecbe0ddf1da3233"
  },
  {
    "url": "/_next/static/chunks/4800.fecbe0ddf1da3233.js.map",
    "revision": "40372e14c849c4c221c0f41f2b0f728f"
  },
  {
    "url": "/_next/static/chunks/4961.1cb207cc3bd56017.js",
    "revision": "1cb207cc3bd56017"
  },
  {
    "url": "/_next/static/chunks/4961.1cb207cc3bd56017.js.map",
    "revision": "efb5ba432f00515eba6775a083f21c10"
  },
  {
    "url": "/_next/static/chunks/5087.7f7db15f2fbe996d.js",
    "revision": "7f7db15f2fbe996d"
  },
  {
    "url": "/_next/static/chunks/5087.7f7db15f2fbe996d.js.map",
    "revision": "436c4c2d12253c53d3ebf4ae52792b81"
  },
  {
    "url": "/_next/static/chunks/5102-cbbec4d175f05d83.js",
    "revision": "cbbec4d175f05d83"
  },
  {
    "url": "/_next/static/chunks/5102-cbbec4d175f05d83.js.map",
    "revision": "986f67bb4091d5b51e33077cab68d45b"
  },
  {
    "url": "/_next/static/chunks/51b6741c.bb581573c05de838.js",
    "revision": "bb581573c05de838"
  },
  {
    "url": "/_next/static/chunks/51b6741c.bb581573c05de838.js.map",
    "revision": "52b84b8e144493cf8456a95757b09f2f"
  },
  {
    "url": "/_next/static/chunks/51c52c66.5fe00e5b8c139737.js",
    "revision": "5fe00e5b8c139737"
  },
  {
    "url": "/_next/static/chunks/51c52c66.5fe00e5b8c139737.js.map",
    "revision": "421d34f1af0535466de4ae5b8998577b"
  },
  {
    "url": "/_next/static/chunks/5356-d7f4891c2cf8ad20.js",
    "revision": "d7f4891c2cf8ad20"
  },
  {
    "url": "/_next/static/chunks/5356-d7f4891c2cf8ad20.js.map",
    "revision": "2df33605b8bd477763cdb231595433da"
  },
  {
    "url": "/_next/static/chunks/5384.a279c4c64472f2ca.js",
    "revision": "a279c4c64472f2ca"
  },
  {
    "url": "/_next/static/chunks/5384.a279c4c64472f2ca.js.map",
    "revision": "b3db0a636dc9650d0b9b6434831525db"
  },
  {
    "url": "/_next/static/chunks/5386.1d50bde5f2853235.js",
    "revision": "1d50bde5f2853235"
  },
  {
    "url": "/_next/static/chunks/5386.1d50bde5f2853235.js.map",
    "revision": "abbb7f7cdf857405e5fe5d8a20269071"
  },
  {
    "url": "/_next/static/chunks/5399.f3d8505542ed218d.js",
    "revision": "f3d8505542ed218d"
  },
  {
    "url": "/_next/static/chunks/5399.f3d8505542ed218d.js.map",
    "revision": "9b5ceea4a9ca0e0f1d22b3b03f1eac3c"
  },
  {
    "url": "/_next/static/chunks/5483.64df71dac46619ec.js",
    "revision": "64df71dac46619ec"
  },
  {
    "url": "/_next/static/chunks/5483.64df71dac46619ec.js.map",
    "revision": "449e88d0e2e9eddab0099645e7616594"
  },
  {
    "url": "/_next/static/chunks/5748.a9b354bc77234c0e.js",
    "revision": "a9b354bc77234c0e"
  },
  {
    "url": "/_next/static/chunks/577.48da575f1a6c1ed9.js",
    "revision": "48da575f1a6c1ed9"
  },
  {
    "url": "/_next/static/chunks/577.48da575f1a6c1ed9.js.map",
    "revision": "da06eba588cc61aa294279456940ae83"
  },
  {
    "url": "/_next/static/chunks/5898.233f6bd010904e2b.js",
    "revision": "233f6bd010904e2b"
  },
  {
    "url": "/_next/static/chunks/5898.233f6bd010904e2b.js.map",
    "revision": "d21b2453730bee796235961dbcd94626"
  },
  {
    "url": "/_next/static/chunks/5976.939f335fc557ae91.js",
    "revision": "939f335fc557ae91"
  },
  {
    "url": "/_next/static/chunks/5976.939f335fc557ae91.js.map",
    "revision": "6d1280139a547ccde65a6aa97a06bb5d"
  },
  {
    "url": "/_next/static/chunks/59f53d1c.286767292caa220a.js",
    "revision": "286767292caa220a"
  },
  {
    "url": "/_next/static/chunks/5a58220e.63f9382c1e13bbed.js",
    "revision": "63f9382c1e13bbed"
  },
  {
    "url": "/_next/static/chunks/5a58220e.63f9382c1e13bbed.js.map",
    "revision": "0bafa775c677bf4b457ee77a4c601131"
  },
  {
    "url": "/_next/static/chunks/6033-cc5f59a0eff29792.js",
    "revision": "cc5f59a0eff29792"
  },
  {
    "url": "/_next/static/chunks/6033-cc5f59a0eff29792.js.map",
    "revision": "a0ef2a165f937d18be6d243bdb323611"
  },
  {
    "url": "/_next/static/chunks/6138.aaea9859fc8cace0.js",
    "revision": "aaea9859fc8cace0"
  },
  {
    "url": "/_next/static/chunks/6138.aaea9859fc8cace0.js.map",
    "revision": "5989964a876f238907c098983a573418"
  },
  {
    "url": "/_next/static/chunks/6166.aff9b3e24e0c38c1.js",
    "revision": "aff9b3e24e0c38c1"
  },
  {
    "url": "/_next/static/chunks/6166.aff9b3e24e0c38c1.js.map",
    "revision": "d7eeb70d184d3fd824d775d75ea77417"
  },
  {
    "url": "/_next/static/chunks/6346.01f918c7fd83a573.js",
    "revision": "01f918c7fd83a573"
  },
  {
    "url": "/_next/static/chunks/6346.01f918c7fd83a573.js.map",
    "revision": "749fa6f10d32580920211b3faaa5e77a"
  },
  {
    "url": "/_next/static/chunks/6424.afd408d2a0a8aa78.js",
    "revision": "afd408d2a0a8aa78"
  },
  {
    "url": "/_next/static/chunks/6424.afd408d2a0a8aa78.js.map",
    "revision": "06a1e277ef6809ad36ed4fde2d391baf"
  },
  {
    "url": "/_next/static/chunks/6432-e799211090896bf8.js",
    "revision": "e799211090896bf8"
  },
  {
    "url": "/_next/static/chunks/6432-e799211090896bf8.js.map",
    "revision": "dfea04579bcb406087631553ceb36eb4"
  },
  {
    "url": "/_next/static/chunks/6579.56b6b706b0d4b07a.js",
    "revision": "56b6b706b0d4b07a"
  },
  {
    "url": "/_next/static/chunks/6579.56b6b706b0d4b07a.js.map",
    "revision": "ffa27801db25b3b8f3ff950f650fa79d"
  },
  {
    "url": "/_next/static/chunks/6586.5684931990e9413d.js",
    "revision": "5684931990e9413d"
  },
  {
    "url": "/_next/static/chunks/6586.5684931990e9413d.js.map",
    "revision": "cbce52129af2f9504ee3d07360df8cbc"
  },
  {
    "url": "/_next/static/chunks/6778.eb8dbdfb58565a2a.js",
    "revision": "eb8dbdfb58565a2a"
  },
  {
    "url": "/_next/static/chunks/6778.eb8dbdfb58565a2a.js.map",
    "revision": "5f2adc14744aaf68bf25fc1ddf0694cd"
  },
  {
    "url": "/_next/static/chunks/6899.ad60e2c80fbebd40.js",
    "revision": "ad60e2c80fbebd40"
  },
  {
    "url": "/_next/static/chunks/6899.ad60e2c80fbebd40.js.map",
    "revision": "0e7dbba555b93d8b8114bdac0e5d4af5"
  },
  {
    "url": "/_next/static/chunks/6dd150ba.ec75e8e489a567a9.js",
    "revision": "ec75e8e489a567a9"
  },
  {
    "url": "/_next/static/chunks/6dd150ba.ec75e8e489a567a9.js.map",
    "revision": "0958db114513904932a656bdf3630b27"
  },
  {
    "url": "/_next/static/chunks/7015.081c061481193a2b.js",
    "revision": "081c061481193a2b"
  },
  {
    "url": "/_next/static/chunks/7015.081c061481193a2b.js.map",
    "revision": "f724c855b4dd5742c534416086c78ddc"
  },
  {
    "url": "/_next/static/chunks/7097.f76a491f2cc66dbf.js",
    "revision": "f76a491f2cc66dbf"
  },
  {
    "url": "/_next/static/chunks/7097.f76a491f2cc66dbf.js.map",
    "revision": "8967bfa47527594e700b498d98bf1d53"
  },
  {
    "url": "/_next/static/chunks/734.6a5d42b74247463e.js",
    "revision": "6a5d42b74247463e"
  },
  {
    "url": "/_next/static/chunks/734.6a5d42b74247463e.js.map",
    "revision": "d54d86412f3c5749e8668927586f88d0"
  },
  {
    "url": "/_next/static/chunks/7474.49beec956a53eca3.js",
    "revision": "49beec956a53eca3"
  },
  {
    "url": "/_next/static/chunks/7474.49beec956a53eca3.js.map",
    "revision": "cdcb919594e120a6ba9a13e92ab1c6b9"
  },
  {
    "url": "/_next/static/chunks/7492-c3c6115326e82ccf.js",
    "revision": "c3c6115326e82ccf"
  },
  {
    "url": "/_next/static/chunks/7725.758b246f86e835a1.js",
    "revision": "758b246f86e835a1"
  },
  {
    "url": "/_next/static/chunks/7725.758b246f86e835a1.js.map",
    "revision": "5895aeb3b51721d2c5e8d2392e051886"
  },
  {
    "url": "/_next/static/chunks/7750.e8e1b75c3506e8c6.js",
    "revision": "e8e1b75c3506e8c6"
  },
  {
    "url": "/_next/static/chunks/7750.e8e1b75c3506e8c6.js.map",
    "revision": "6d2fef59fe21dec358d7a5a31fc8f016"
  },
  {
    "url": "/_next/static/chunks/7879-2ee883c40233c9ae.js",
    "revision": "2ee883c40233c9ae"
  },
  {
    "url": "/_next/static/chunks/7879-2ee883c40233c9ae.js.map",
    "revision": "e5843b3eafc79757795c25c292815768"
  },
  {
    "url": "/_next/static/chunks/8218.f6515e160e53aa3c.js",
    "revision": "f6515e160e53aa3c"
  },
  {
    "url": "/_next/static/chunks/8218.f6515e160e53aa3c.js.map",
    "revision": "c23818799c68cafb8d47a92745f0aac4"
  },
  {
    "url": "/_next/static/chunks/838.a45c65c59b1fe17b.js",
    "revision": "a45c65c59b1fe17b"
  },
  {
    "url": "/_next/static/chunks/838.a45c65c59b1fe17b.js.map",
    "revision": "1c3e4efc1ccaaaf668595d236e9530d8"
  },
  {
    "url": "/_next/static/chunks/8472-89ab84f1a8d19af6.js",
    "revision": "89ab84f1a8d19af6"
  },
  {
    "url": "/_next/static/chunks/8472-89ab84f1a8d19af6.js.map",
    "revision": "3156a8bc80eca97a2e58ced4bdc000ef"
  },
  {
    "url": "/_next/static/chunks/8578.ca47087aabca883a.js",
    "revision": "ca47087aabca883a"
  },
  {
    "url": "/_next/static/chunks/8578.ca47087aabca883a.js.map",
    "revision": "02c75e64de6c3e81f0bc43cc5ecb5397"
  },
  {
    "url": "/_next/static/chunks/858.ff4b46c8de604b26.js",
    "revision": "ff4b46c8de604b26"
  },
  {
    "url": "/_next/static/chunks/858.ff4b46c8de604b26.js.map",
    "revision": "9de4e70dd763c452201f6692ac8c1589"
  },
  {
    "url": "/_next/static/chunks/8602.a3bbfd22c4ab8003.js",
    "revision": "a3bbfd22c4ab8003"
  },
  {
    "url": "/_next/static/chunks/8602.a3bbfd22c4ab8003.js.map",
    "revision": "e330599463037102875256e3efe699a9"
  },
  {
    "url": "/_next/static/chunks/8614.dbbc3cf5dc9fb7d9.js",
    "revision": "dbbc3cf5dc9fb7d9"
  },
  {
    "url": "/_next/static/chunks/8614.dbbc3cf5dc9fb7d9.js.map",
    "revision": "cd899a05e89aabaf04190e60f39ad800"
  },
  {
    "url": "/_next/static/chunks/8681.f968d174433279ff.js",
    "revision": "f968d174433279ff"
  },
  {
    "url": "/_next/static/chunks/8681.f968d174433279ff.js.map",
    "revision": "ec45bfef5e84c68f57fe212288eed0eb"
  },
  {
    "url": "/_next/static/chunks/87d427d2-4b3f96f2a3f4b743.js",
    "revision": "4b3f96f2a3f4b743"
  },
  {
    "url": "/_next/static/chunks/8871-48f526e1254c05a0.js",
    "revision": "48f526e1254c05a0"
  },
  {
    "url": "/_next/static/chunks/8871-48f526e1254c05a0.js.map",
    "revision": "852fa993ff14c56ee43cf71becc9d086"
  },
  {
    "url": "/_next/static/chunks/8898.84b2c7e0b6e13f11.js",
    "revision": "84b2c7e0b6e13f11"
  },
  {
    "url": "/_next/static/chunks/8898.84b2c7e0b6e13f11.js.map",
    "revision": "7da7b59cc1e04ecb1a61dba2320607e0"
  },
  {
    "url": "/_next/static/chunks/8985.f00212dfa0718ff9.js",
    "revision": "f00212dfa0718ff9"
  },
  {
    "url": "/_next/static/chunks/8985.f00212dfa0718ff9.js.map",
    "revision": "9649066b89b0f369692da7690b87d1fe"
  },
  {
    "url": "/_next/static/chunks/911.81e56462b1aec671.js",
    "revision": "81e56462b1aec671"
  },
  {
    "url": "/_next/static/chunks/911.81e56462b1aec671.js.map",
    "revision": "3a93aff7e4515968059a25b4f12d169e"
  },
  {
    "url": "/_next/static/chunks/9227-252d36e47e055305.js",
    "revision": "252d36e47e055305"
  },
  {
    "url": "/_next/static/chunks/9227-252d36e47e055305.js.map",
    "revision": "eb8b0546fd77062abc9da89b93c29d86"
  },
  {
    "url": "/_next/static/chunks/9291.f2fa8bd191056856.js",
    "revision": "f2fa8bd191056856"
  },
  {
    "url": "/_next/static/chunks/9291.f2fa8bd191056856.js.map",
    "revision": "0ed351356c601a148ca1f5fdf3632bf0"
  },
  {
    "url": "/_next/static/chunks/9382.0ec28414d7b260d3.js",
    "revision": "0ec28414d7b260d3"
  },
  {
    "url": "/_next/static/chunks/9382.0ec28414d7b260d3.js.map",
    "revision": "19b9ca5dbc12d26ef702ad730bbeacea"
  },
  {
    "url": "/_next/static/chunks/9433.257cddc15e70fce2.js",
    "revision": "257cddc15e70fce2"
  },
  {
    "url": "/_next/static/chunks/9433.257cddc15e70fce2.js.map",
    "revision": "8cf7ed2b43a1c3b9b069e0f7c4f853c9"
  },
  {
    "url": "/_next/static/chunks/9435.4f5fb53b3c8e87ec.js",
    "revision": "4f5fb53b3c8e87ec"
  },
  {
    "url": "/_next/static/chunks/9435.4f5fb53b3c8e87ec.js.map",
    "revision": "8f22e89b37ccfb0a26759f4a5f3d1fe4"
  },
  {
    "url": "/_next/static/chunks/9441.6d7f927c9968e7c0.js",
    "revision": "6d7f927c9968e7c0"
  },
  {
    "url": "/_next/static/chunks/9441.6d7f927c9968e7c0.js.map",
    "revision": "f2cfa4423287dfc8af50530979f7574f"
  },
  {
    "url": "/_next/static/chunks/9534-13d530c02b55e7fa.js",
    "revision": "13d530c02b55e7fa"
  },
  {
    "url": "/_next/static/chunks/9534-13d530c02b55e7fa.js.map",
    "revision": "db50baa394f1781bfc6039d937009824"
  },
  {
    "url": "/_next/static/chunks/9638.a17969e5cfcce52a.js",
    "revision": "a17969e5cfcce52a"
  },
  {
    "url": "/_next/static/chunks/9638.a17969e5cfcce52a.js.map",
    "revision": "048620677aeb6ff612c35e12dfe45924"
  },
  {
    "url": "/_next/static/chunks/9717.727f340394a2f330.js",
    "revision": "727f340394a2f330"
  },
  {
    "url": "/_next/static/chunks/9717.727f340394a2f330.js.map",
    "revision": "a425ce3a14ef22036154835b0ccc6642"
  },
  {
    "url": "/_next/static/chunks/9733.9855e59ec3a3f4b7.js",
    "revision": "9855e59ec3a3f4b7"
  },
  {
    "url": "/_next/static/chunks/9733.9855e59ec3a3f4b7.js.map",
    "revision": "d0fabe039547814da0cc48f11ea276d2"
  },
  {
    "url": "/_next/static/chunks/9851.e8553fcbf84dde8e.js",
    "revision": "e8553fcbf84dde8e"
  },
  {
    "url": "/_next/static/chunks/9851.e8553fcbf84dde8e.js.map",
    "revision": "dbaec83611eb6389c9d6bbab35eda28e"
  },
  {
    "url": "/_next/static/chunks/c679038e.ed09a93433a0fb7a.js",
    "revision": "ed09a93433a0fb7a"
  },
  {
    "url": "/_next/static/chunks/c679038e.ed09a93433a0fb7a.js.map",
    "revision": "3e7a24aa756b59495acb7f89153d728e"
  },
  {
    "url": "/_next/static/chunks/fe390fd2.bf182c32af33208b.js",
    "revision": "bf182c32af33208b"
  },
  {
    "url": "/_next/static/chunks/fe390fd2.bf182c32af33208b.js.map",
    "revision": "78e2a3785bbdc7ee3d8c7384e61b62ed"
  },
  {
    "url": "/_next/static/chunks/framework-8383bf789d61bcef.js",
    "revision": "8383bf789d61bcef"
  },
  {
    "url": "/_next/static/chunks/framework-8383bf789d61bcef.js.map",
    "revision": "a115d423eec304cd979739160b33710b"
  },
  {
    "url": "/_next/static/chunks/main-6975c9c4f12c2805.js",
    "revision": "6975c9c4f12c2805"
  },
  {
    "url": "/_next/static/chunks/main-6975c9c4f12c2805.js.map",
    "revision": "de8393e0c4aa4778ccccb46fb7c9c290"
  },
  {
    "url": "/_next/static/chunks/pages/404-cea185b1f6b7d13d.js",
    "revision": "cea185b1f6b7d13d"
  },
  {
    "url": "/_next/static/chunks/pages/404-cea185b1f6b7d13d.js.map",
    "revision": "79ba21c027e356b080801a4e77097a11"
  },
  {
    "url": "/_next/static/chunks/pages/500-a4a6d42d2642006b.js",
    "revision": "a4a6d42d2642006b"
  },
  {
    "url": "/_next/static/chunks/pages/500-a4a6d42d2642006b.js.map",
    "revision": "6885397e1c01a828f6da3e0759a15cd3"
  },
  {
    "url": "/_next/static/chunks/pages/_error-8a3365300a74771f.js",
    "revision": "8a3365300a74771f"
  },
  {
    "url": "/_next/static/chunks/pages/_error-8a3365300a74771f.js.map",
    "revision": "4666038d46ca9db4fe00ed29671f2a56"
  },
  {
    "url": "/_next/static/chunks/pages/contact-1e955792ce8b72fa.js",
    "revision": "1e955792ce8b72fa"
  },
  {
    "url": "/_next/static/chunks/pages/contact-1e955792ce8b72fa.js.map",
    "revision": "eea748cd86c49f2d5dd80f55b04aeb29"
  },
  {
    "url": "/_next/static/chunks/pages/deploy-linux-d7185c8f248de8b0.js",
    "revision": "d7185c8f248de8b0"
  },
  {
    "url": "/_next/static/chunks/pages/deploy-linux-d7185c8f248de8b0.js.map",
    "revision": "67b5f8e13bb1f6dca960f50b577a7dd1"
  },
  {
    "url": "/_next/static/chunks/pages/deployments-479d98bc8f04c4e5.js",
    "revision": "479d98bc8f04c4e5"
  },
  {
    "url": "/_next/static/chunks/pages/deployments-479d98bc8f04c4e5.js.map",
    "revision": "cab407f2ebe11c776aad315e6012be91"
  },
  {
    "url": "/_next/static/chunks/pages/deployments/%5Bdseq%5D-940c410df807017a.js",
    "revision": "940c410df807017a"
  },
  {
    "url": "/_next/static/chunks/pages/deployments/%5Bdseq%5D-940c410df807017a.js.map",
    "revision": "46efd3bac9a67a4ef8ba82909ac5d000"
  },
  {
    "url": "/_next/static/chunks/pages/faq-8989d2648405e633.js",
    "revision": "8989d2648405e633"
  },
  {
    "url": "/_next/static/chunks/pages/faq-8989d2648405e633.js.map",
    "revision": "761ea89c8b6520b2e97da0c3f7ec44d4"
  },
  {
    "url": "/_next/static/chunks/pages/get-started-57930064e98f8302.js",
    "revision": "57930064e98f8302"
  },
  {
    "url": "/_next/static/chunks/pages/get-started-57930064e98f8302.js.map",
    "revision": "b784a3f0a759f43955e184f0c1eebcd5"
  },
  {
    "url": "/_next/static/chunks/pages/get-started/wallet-7d39f040ebe7968d.js",
    "revision": "7d39f040ebe7968d"
  },
  {
    "url": "/_next/static/chunks/pages/get-started/wallet-7d39f040ebe7968d.js.map",
    "revision": "43634b70bb0fce5b94727b31c00d121d"
  },
  {
    "url": "/_next/static/chunks/pages/index-7781bb5c2dbfcdb3.js",
    "revision": "7781bb5c2dbfcdb3"
  },
  {
    "url": "/_next/static/chunks/pages/index-7781bb5c2dbfcdb3.js.map",
    "revision": "34fba6a04ea25a167074de765042dae4"
  },
  {
    "url": "/_next/static/chunks/pages/maintenance-dd3056ef5d884017.js",
    "revision": "dd3056ef5d884017"
  },
  {
    "url": "/_next/static/chunks/pages/maintenance-dd3056ef5d884017.js.map",
    "revision": "b7d89738f4db541774ea56b93bdc6eac"
  },
  {
    "url": "/_next/static/chunks/pages/new-deployment-7ba4e1531b574f7b.js",
    "revision": "7ba4e1531b574f7b"
  },
  {
    "url": "/_next/static/chunks/pages/new-deployment-7ba4e1531b574f7b.js.map",
    "revision": "6a2c249a4ecf11fdea963228642cbd4d"
  },
  {
    "url": "/_next/static/chunks/pages/privacy-policy-bd363e256d8c8604.js",
    "revision": "bd363e256d8c8604"
  },
  {
    "url": "/_next/static/chunks/pages/privacy-policy-bd363e256d8c8604.js.map",
    "revision": "1a79ff474f2f65fe536028b0ed6eb5c0"
  },
  {
    "url": "/_next/static/chunks/pages/profile/%5Busername%5D-519954e76a73803c.js",
    "revision": "519954e76a73803c"
  },
  {
    "url": "/_next/static/chunks/pages/profile/%5Busername%5D-519954e76a73803c.js.map",
    "revision": "1a0e211e49494e47fe2fa69b08abf434"
  },
  {
    "url": "/_next/static/chunks/pages/providers-78b415b11ab24754.js",
    "revision": "78b415b11ab24754"
  },
  {
    "url": "/_next/static/chunks/pages/providers-78b415b11ab24754.js.map",
    "revision": "78955e824949fcf89f41e4aea560d7c3"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D-25a8ae39fe309372.js",
    "revision": "25a8ae39fe309372"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D-25a8ae39fe309372.js.map",
    "revision": "39c7b3d5032674dc3f96610c8edaec95"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D/edit-f55f3a33968ed6ed.js",
    "revision": "f55f3a33968ed6ed"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D/edit-f55f3a33968ed6ed.js.map",
    "revision": "d9cbd76d571053eb34625da322449543"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D/leases-92be1b71128d70d1.js",
    "revision": "92be1b71128d70d1"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D/leases-92be1b71128d70d1.js.map",
    "revision": "2ce8b163843513315bbea03cdf29bfe8"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D/raw-b772a572138999ae.js",
    "revision": "b772a572138999ae"
  },
  {
    "url": "/_next/static/chunks/pages/providers/%5Bowner%5D/raw-b772a572138999ae.js.map",
    "revision": "c748409041fa304950708ed7fc67cd41"
  },
  {
    "url": "/_next/static/chunks/pages/rent-gpu-b20b8e7bdf3f8afa.js",
    "revision": "b20b8e7bdf3f8afa"
  },
  {
    "url": "/_next/static/chunks/pages/rent-gpu-b20b8e7bdf3f8afa.js.map",
    "revision": "e466540815ac052052d64513efc4d1f2"
  },
  {
    "url": "/_next/static/chunks/pages/sdl-builder-60b069a505334e22.js",
    "revision": "60b069a505334e22"
  },
  {
    "url": "/_next/static/chunks/pages/sdl-builder-60b069a505334e22.js.map",
    "revision": "8473565e30c57453ad01753c9a2e015c"
  },
  {
    "url": "/_next/static/chunks/pages/settings-815ff6f5746c93ca.js",
    "revision": "815ff6f5746c93ca"
  },
  {
    "url": "/_next/static/chunks/pages/settings-815ff6f5746c93ca.js.map",
    "revision": "e225cd969ee4e10399b2116cb336449a"
  },
  {
    "url": "/_next/static/chunks/pages/settings/authorizations-dae905c51dce9b1f.js",
    "revision": "dae905c51dce9b1f"
  },
  {
    "url": "/_next/static/chunks/pages/settings/authorizations-dae905c51dce9b1f.js.map",
    "revision": "0c15539cc390322208b1747d12babe40"
  },
  {
    "url": "/_next/static/chunks/pages/template/%5Bid%5D-29992f25b6c180e8.js",
    "revision": "29992f25b6c180e8"
  },
  {
    "url": "/_next/static/chunks/pages/template/%5Bid%5D-29992f25b6c180e8.js.map",
    "revision": "293c882bd2ade84cea89864f1c62a0db"
  },
  {
    "url": "/_next/static/chunks/pages/templates-bbf4b660ed2cea53.js",
    "revision": "bbf4b660ed2cea53"
  },
  {
    "url": "/_next/static/chunks/pages/templates-bbf4b660ed2cea53.js.map",
    "revision": "630ce5c1e886286ff980cf7444913193"
  },
  {
    "url": "/_next/static/chunks/pages/templates/%5BtemplateId%5D-753750f49f6dd0eb.js",
    "revision": "753750f49f6dd0eb"
  },
  {
    "url": "/_next/static/chunks/pages/templates/%5BtemplateId%5D-753750f49f6dd0eb.js.map",
    "revision": "75a135f70e6f71ffc59b65d0d212c83e"
  },
  {
    "url": "/_next/static/chunks/pages/terms-of-service-b1ef7819fd159dfd.js",
    "revision": "b1ef7819fd159dfd"
  },
  {
    "url": "/_next/static/chunks/pages/terms-of-service-b1ef7819fd159dfd.js.map",
    "revision": "c4b2a4cf600b3750aa1c2e640833469d"
  },
  {
    "url": "/_next/static/chunks/pages/user/settings-83c83b6d6893e20b.js",
    "revision": "83c83b6d6893e20b"
  },
  {
    "url": "/_next/static/chunks/pages/user/settings-83c83b6d6893e20b.js.map",
    "revision": "9c41a26bb4d7d94a15a33e01d76d949c"
  },
  {
    "url": "/_next/static/chunks/pages/user/settings/address-book-4a37e05f315b08c1.js",
    "revision": "4a37e05f315b08c1"
  },
  {
    "url": "/_next/static/chunks/pages/user/settings/address-book-4a37e05f315b08c1.js.map",
    "revision": "64b2b2199ac592fb4087dfb0295d4aac"
  },
  {
    "url": "/_next/static/chunks/pages/user/settings/favorites-bffa5206e2a0a4d4.js",
    "revision": "bffa5206e2a0a4d4"
  },
  {
    "url": "/_next/static/chunks/pages/user/settings/favorites-bffa5206e2a0a4d4.js.map",
    "revision": "d1a137118f4666ad64de6eb8f3320836"
  },
  {
    "url": "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
    "revision": "79330112775102f91e1010318bae2bd3"
  },
  {
    "url": "/_next/static/chunks/webpack-24ed890a0730f869.js",
    "revision": "24ed890a0730f869"
  },
  {
    "url": "/_next/static/chunks/webpack-24ed890a0730f869.js.map",
    "revision": "fe986fcba3407b486397dc0a074d2758"
  },
  {
    "url": "/_next/static/css/123cd9aa7c29b6f2.css",
    "revision": "123cd9aa7c29b6f2"
  },
  {
    "url": "/_next/static/css/123cd9aa7c29b6f2.css.map",
    "revision": "a70a769d964c22a26b375a64f171bc88"
  },
  {
    "url": "/_next/static/css/1b759b588b2bcef3.css",
    "revision": "1b759b588b2bcef3"
  },
  {
    "url": "/_next/static/css/60da0364ed65e94f.css",
    "revision": "60da0364ed65e94f"
  },
  {
    "url": "/_next/static/css/60da0364ed65e94f.css.map",
    "revision": "7ebdaca80e1b94a3afdc509e9729e2f4"
  },
  {
    "url": "/_next/static/css/85fa6dafca566008.css",
    "revision": "85fa6dafca566008"
  },
  {
    "url": "/_next/static/css/85fa6dafca566008.css.map",
    "revision": "e1c00d68c2a092625defb4c86bdb56ae"
  },
  {
    "url": "/_next/static/media/e11418ac562b8ac1-s.p.woff2",
    "revision": "0e46e732cced180e3a2c7285100f27d4"
  },
  {
    "url": "/akash-console.png",
    "revision": "4ab11b341159b007fc63d28631e0a8d8"
  },
  {
    "url": "/android-chrome-192x192.png",
    "revision": "a2eeed7b0d4a8c9bd9fa014378ac733e"
  },
  {
    "url": "/android-chrome-256x256.png",
    "revision": "b0dc3017fadbf0f4c323636535f582b7"
  },
  {
    "url": "/android-chrome-384x384.png",
    "revision": "3fae18e8537ff0745221e5aec66c247b"
  },
  {
    "url": "/apple-touch-icon.png",
    "revision": "43451e961475b8323dcfb705fb6eb480"
  },
  {
    "url": "/browserconfig.xml",
    "revision": "e41ebb6b49206a59d8eafce8220ebeac"
  },
  {
    "url": "/favicon-16x16.png",
    "revision": "8cf7a2775f6f6d6db07b95197538b11b"
  },
  {
    "url": "/favicon-32x32.png",
    "revision": "bef7d8e9aaed7fb3ef49cbffa31b5339"
  },
  {
    "url": "/favicon.ico",
    "revision": "cfebc107c597696c596a277239546a86"
  },
  {
    "url": "/images/akash-logo-dark.png",
    "revision": "b1623e407dad710a4c0c73461bbb8bb3"
  },
  {
    "url": "/images/akash-logo-flat-dark.png",
    "revision": "50b4ad6438e791047d97da0af65b96f5"
  },
  {
    "url": "/images/akash-logo-flat-light.png",
    "revision": "2befec2d17a2b6a32b1a0517ca1baf01"
  },
  {
    "url": "/images/akash-logo-light.png",
    "revision": "0ea30905c72eda674ad74c65d0c062bf"
  },
  {
    "url": "/images/akash-logo.svg",
    "revision": "4a5f3eaf31bf0f88ff3baec6281c8de3"
  }, 
  {
    "url": "/images/chains/akash.png",
    "revision": "d0b3f8ccaa3b0d18ef4039f86edf4436"
  },
  {
    "url": "/images/chains/atom.png",
    "revision": "6e4d88ad2c295e811fee29cc89edfcb1"
  },
  {
    "url": "/images/chains/evmos.png",
    "revision": "487a456e9091dec9ddf18892531401f8"
  },
  {
    "url": "/images/chains/huahua.png",
    "revision": "f0ba8427522833bba44962e87e982412"
  },
  {
    "url": "/images/chains/juno.png",
    "revision": "933b7d992dc67fd2f0d0f35e182b3361"
  },
  {
    "url": "/images/chains/kuji.png",
    "revision": "9c31e679007e5ae16fc28e067d907f79"
  },
  {
    "url": "/images/chains/osmo.png",
    "revision": "6940c69c28e5d85d99ba498fc7e95a26"
  },
  {
    "url": "/images/chains/scrt.png",
    "revision": "0dd98be17447cf7c47d27153f534ca60"
  },
  {
    "url": "/images/chains/stars.png",
    "revision": "56d0bd40e52f010c7267eb78c53138f2"
  },
  {
    "url": "/images/chains/strd.png",
    "revision": "eebdfb53ba0bc9bba88b0bede7a44f6d"
  },
  {
    "url": "/images/cloudmos-logo-light.png",
    "revision": "a7423327e4280225e176da92c6176c28"
  },
  {
    "url": "/images/cloudmos-logo-small.jpg",
    "revision": "4b339b83e7dc396894537b83d794726d"
  },
  {
    "url": "/images/cloudmos-logo.png",
    "revision": "56d87e0230a0ad5dd745efd486a33a58"
  }, 
  {
    "url": "/images/faq/change-node.png",
    "revision": "9421f6443f6c4397887035e50d8c9b24"
  },
  {
    "url": "/images/faq/update-deployment-btn.png",
    "revision": "ebc7f6907a08fdf6a6cd5a87043456fd"
  },
  {
    "url": "/images/keplr-logo.png",
    "revision": "50397e4902a33a6045c0f23dfe5cb1bd"
  },
  {
    "url": "/images/leap-cosmos-logo.png",
    "revision": "a54ced7748b33565e6dc1ea1c5b1ef52"
  },
  {
    "url": "/images/powered-by-akash-dark.svg",
    "revision": "3ea920f030ede7926a02c2dc17e332c4"
  },
  {
    "url": "/images/powered-by-akash.svg",
    "revision": "24b2566094fafded6c325246fe84c2a9"
  },
  {
    "url": "/images/ubuntu.png",
    "revision": "c631b8fae270a618c1fe1c9d43097189"
  },
  {
    "url": "/images/wallet-connect-logo.png",
    "revision": "8379e4d4e7267b47a0b5b89807a4d8f8"
  },
  {
    "url": "/manifest.json",
    "revision": "a030fca8a5c7b8e2e1b5d7614a8b74fa"
  },
  {
    "url": "/mstile-150x150.png",
    "revision": "17614fed638be1d5e2225b9d5419336a"
  },
  {
    "url": "/robots.txt",
    "revision": "c2bb774b8071c957d2b835beaa28a58b"
  },
  {
    "url": "/safari-pinned-tab.svg",
    "revision": "86b02210e078cb763098dfec594f4f04"
  }
], {
  "ignoreURLParametersMatching": []
});
workbox_precaching_cleanupOutdatedCaches();



workbox_routing_registerRoute("/", new workbox_strategies_NetworkFirst({ "cacheName":"start-url", plugins: [{ cacheWillUpdate: async ({ request, response, event, state }) => { if (response && response.type === 'opaqueredirect') { return new Response(response.body, { status: 200, statusText: 'OK', headers: response.headers }) } return response } }] }), 'GET');
workbox_routing_registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new workbox_strategies_CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536000 })] }), 'GET');
workbox_routing_registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"static-font-assets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"static-image-assets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\/_next\/image\?url=.+$/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"next-image", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:mp3|wav|ogg)$/i, new workbox_strategies_CacheFirst({ "cacheName":"static-audio-assets", plugins: [new workbox_range_requests_RangeRequestsPlugin(), new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:mp4)$/i, new workbox_strategies_CacheFirst({ "cacheName":"static-video-assets", plugins: [new workbox_range_requests_RangeRequestsPlugin(), new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:js)$/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"static-js-assets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:css|less)$/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"static-style-assets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"next-data", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(/\.(?:json|xml|csv)$/i, new workbox_strategies_NetworkFirst({ "cacheName":"static-data-assets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(({ url }) => {
      const isSameOrigin = self.origin === url.origin
      if (!isSameOrigin) return false
      const pathname = url.pathname
      // Exclude /api/auth/callback/* to fix OAuth workflow in Safari without impact other environment
      // Above route is default for next-auth, you may need to change it if your OAuth workflow has a different callback route
      // Issue: https://github.com/shadowwalker/next-pwa/issues/131#issuecomment-821894809
      if (pathname.startsWith('/api/auth/')) return false
      if (pathname.startsWith('/api/')) return true
      return false
    }, new workbox_strategies_NetworkFirst({ "cacheName":"apis","networkTimeoutSeconds":10, plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(({ url }) => {
      const isSameOrigin = self.origin === url.origin
      if (!isSameOrigin) return false
      const pathname = url.pathname
      if (pathname.startsWith('/api/')) return false
      return true
    }, new workbox_strategies_NetworkFirst({ "cacheName":"others","networkTimeoutSeconds":10, plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), 'GET');
workbox_routing_registerRoute(({ url }) => {
      const isSameOrigin = self.origin === url.origin
      return !isSameOrigin
    }, new workbox_strategies_NetworkFirst({ "cacheName":"cross-origin","networkTimeoutSeconds":10, plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }), 'GET');




