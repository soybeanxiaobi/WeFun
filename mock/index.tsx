const JOKE_API = require("./joke.tsx");
const _proxy = process.env.proxy;
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
    ...JOKE_API
  };
}
module.exports = proxy;