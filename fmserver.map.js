module.exports = {
  '.': function (req, res) {
    res.setHeader('Set-Cookie', ['test=2aaa;path=/']);
  },
  '^/mock/deploy': { success: 0, data: 401 },
  '^/mock/verification/.+': function (req, res) {
    res.setHeader('Set-Cookie', ['uid=abc;Path=/;domain=abc.ccc', 'abc=2;path=/']);
    const rs = { success: 1 };
    res.end(JSON.stringify(rs));
    return rs;
  },
  '^/mock/[^.]+': '$&.json',
};
