import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8EC0346B6DDEAeAE76d86D0d08682d35CB5fEa28'
  );

export default instance;
