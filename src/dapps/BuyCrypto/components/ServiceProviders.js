export default [
  {
    name: 'Simplex',
    description: 'Buy crypto with your credit card',
    image: '/assets/simplex.png',
    url: function url(address) {
      return `https://buy.coinbase.com/widget?code=88d6141a-ff60-536c-841c-8f830adaacfd&crypto_currency=ETH&address=${address}`;
    },
    fees: 'Fees 5%',
    delivery: '10-30 minute settlement',
    currencies: new Set(["BTC", "BCH", "ETH", "LTC"])
  },
  {
    name: 'Wyre',
    description: 'Buy crypto with US bank accounts',
    image: '/assets/wyre.png',
    url: function url(address) {
      return `https://buy.coinbase.com/widget?code=88d6141a-ff60-536c-841c-8f830adaacfd&crypto_currency=ETH&address=${address}`;
    },
    fees: 'Fees 1%',
    delivery: '1-3 days settlement',
    currencies: new Set(["BTC", "ETH", "DAI"])
  },
];
