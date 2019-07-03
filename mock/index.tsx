const _proxy = process.env.proxy;
const JOKE_API = require("./joke.tsx");
const RIDDLE_API = require("./riddle.tsx");
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
    ...JOKE_API,
    ...RIDDLE_API
  };
}
module.exports = proxy;