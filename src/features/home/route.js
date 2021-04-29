import BuyBNB from 'features/vault/components/BuyBNB/BuyBNB';
import DownloadWallet from 'features/vault/components/DownloadWallet/DownloadWallet';
import Tutorials from 'features/vault/components/Tutorials/Tutorials';
import { HomePage } from './';

export default {
  path: '',
  childRoutes: [
    
    { path: 'index', component: HomePage, isIndex: true }, 
    { path: 'tutorial', component:Tutorials, isIndex:true  },
    { path:'buybnb', component:BuyBNB, isIndex:true},
    { path:'docs', component:Tutorials, isIndex:true},
    { path:'downloadwallet', component:DownloadWallet, isIndex:true},

  ],
};
