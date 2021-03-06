import config, { DEFAULT_BLOCK_GAS_LIMIT, Config } from './config';

const defaultConfig: Config = {
  accounts: {
    amount: 10,
    ether: 100,
  },

  contracts: {
    type: 'truffle',
    defaultGas: DEFAULT_BLOCK_GAS_LIMIT * 0.75,
    defaultGasPrice: 20e9, // 20 gigawei
    artifactsDir: 'build/contracts',
  },

  setupProvider: async (baseProvider) => baseProvider,

  coverage: false,

  node: {
    allowUnlimitedContractSize: false,
    gasLimit: DEFAULT_BLOCK_GAS_LIMIT,
    gasPrice: '0x4a817c800', // 20 gigawei
  },
};

describe('config', (): void => {
  it('provides default value', (): void => {
    // because setupProvider wouldn't match with toEqual
    expect(JSON.stringify(config)).toBe(JSON.stringify(defaultConfig));
  });
});
