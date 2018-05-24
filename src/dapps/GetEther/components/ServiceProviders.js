export default [
  {
    name: 'Coinbase',
    description: 'Cheap way to buy crypto',
    image: '/assets/coinbase.png',
    // countries: new Set([
    //     "US", "CA"
    // ]),
    supportAll: true,
    url: function url(address) {
      return `https://buy.coinbase.com/widget?code=88d6141a-ff60-536c-841c-8f830adaacfd&crypto_currency=ETH&address=${address}`;
    },
    fees: 'up to ~4%',
    limits: 'Varies',
    delivery: 'Immediate',
    networks: new Set([1]),
    ignoredCountries: new Set([]),
  },
  {
    name: 'Changelly',
    description: 'Cheap way to buy crypto',
    image: '/assets/changelly.png',
    // countries: new Set([
    //     "US", "CA"
    // ]),
    supportAll: true,
    url(address) {
      return `https://changelly.com/widget/v1?auth=email&from=USD&to=ETH&merchant_id=968d4f0f0bf9&ref_id=968d4f0f0bf9&color=00cf70&address=${address}`;
    },
    fees: 'up to ~5%',
    limits: 'Varies',
    delivery: 'Immediate',
    networks: new Set([1]),
    ignoredCountries: new Set(['US']),
  },
  {
    name: 'Indacoin',
    description: 'Cheap way to buy crypto',
    image: '/assets/indacoin.png',
    // countries: new Set([
    //     "US", "CA"
    // ]),
    supportAll: true,
    url(address) {
      return `https://indacoin.com/gw/payment_form?partner=trustwallet&cur_to=ETH&amount=100&cur_from=USD&address=${address}`;
    },
    fees: 'up to ~10%',
    limits: 'Varies',
    delivery: 'Immediate',
    networks: new Set([1]),
    ignoredCountries: new Set(['US']),
  },
  {
    name: 'Ropsten Faucet',
    description: '',
    image: 'https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png',
    // countries: new Set([
    //     "US", "CA"
    // ]),
    supportAll: true,
    url() {
      return 'http://faucet.ropsten.be:3001/';
    },
    fees: 'Free',
    limits: '1 test ETH',
    delivery: 'Immediate',
    networks: new Set([3]),
    ignoredCountries: new Set([]),
  },
  {
    name: 'Rinkeby Faucet',
    description: '',
    image: 'https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png',
    supportAll: true,
    url() {
      return 'https://faucet.rinkeby.io/';
    },
    fees: 'Free',
    limits: 'Up to 18 test ETH',
    delivery: 'Immediate',
    networks: new Set([4]),
    ignoredCountries: new Set([]),
  },
  {
    name: 'Sokol Faucet',
    description: '',
    image: 'https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png',
    supportAll: true,
    url() {
      return 'https://faucet-sokol.herokuapp.com/';
    },
    fees: 'Free',
    limits: '0.5 SPOA',
    delivery: 'Immediate',
    networks: new Set([77]),
    ignoredCountries: new Set([]),
  },
  {
    name: 'Kovan Faucet',
    description: 'Manual verification',
    image: 'https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png',
    supportAll: true,
    url() {
      return 'https://gitter.im/kovan-testnet/faucet';
    },
    fees: 'Free',
    limits: '5 KETH',
    delivery: 'Immediate',
    networks: new Set([42]),
    ignoredCountries: new Set([]),
  },
];
