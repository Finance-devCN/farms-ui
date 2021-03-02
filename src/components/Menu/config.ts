import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://www.finance.cn.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://www.finance.cn.com/#/pool',
      },
    ],
  },
  {
    label: 'Finance Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Finance Pools (coming soon)',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Casino (coming in 48h)',
  //   icon: 'PoolIcon',
  //   href: '/casino',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Financeinfo',
        href: 'https://financeswap.info',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/FinanceCN',
      },
      {
        label: 'Blog',
        href: 'https://financecn.medium.com/',
      },
      {
        label: 'Whitepaper',
        href: '/whitepaper.pdf',
      }
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/Finance-FICN/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x755fdB231FcA11586b1e4385BD792ad9ba55110C',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.financeswap.',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/goosedefi/',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://goosedefi.gitbook.io/goose-finance/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://goosefinance.medium.com/',
  //     },
  //   ],
  // },
]

export default config
