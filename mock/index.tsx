const JOKE = require("./joke.tsx");
const _proxy = process.env.proxy;
console.log('_proxy ===>', _proxy);
let proxy = {};
if (_proxy) {
  proxy = {
    /**
     * 远程服务器
     */
    _proxy: {
      proxy: {
        // "/repos/*": "https://api.github.com/",
      },
      changeHost: true
    }
  };
} else {
  proxy = {
    /**
     * Mock
     */
    ...JOKE
  };
}
console.log('proxy ===>', proxy)
module.exports = proxy;