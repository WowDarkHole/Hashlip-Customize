const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "DARK CITY KEYS";
const description = "IANUA says  Hello old friend, DARK CITY is a Web 3.0 franchise that looks to innovative user experience. The SOL is omniscient, it cuts through the darkness learning from you and only then will decide your fate. These are the keys to DARK CITY, it is where everything begins … AZCZB-AZCZAZ-AYBZAZ-AXAZB-AZBZC-   AYAZBZ-AZAZBY-   AZBZAZA-AZAZAZAZ-AZAZBY-AXAZB-   AXAZB-AZBZC-AZCZAZ-   AXAZB-AZAZAZAZ-AXBAZ-AZBXA-AYAZBZ-AZBXA-AYCX-   AZBW-AZCYA-   AYBZAZ-   AZBZAY-AZCZAZ-AZAYBZ-   AYAZBZ-AZBXA-   AYBZAZ-   AZBYB-AZBW-AXBZA-AZBZAY-";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 2700, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [ 
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Sky" },
      { name: "Back Speical" },
      { name: "Floor" },
      { name: "Back Mist", options: { blend: MODE.overlay} },
      { name: "Front Key" },
      { name: "Middle Key" },
      { name: "Back Key" },
      { name: "Front Mist", options: { blend: MODE.overlay} },
      { name: "Front Mist 2" },
      { name: "FINAL", options: { blend: MODE.overlay, opacity: 0.4} },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 6480,
  height: 6480,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 10,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
