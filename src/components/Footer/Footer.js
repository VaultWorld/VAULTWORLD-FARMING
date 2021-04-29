import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import medium from '../../features/src/img/social/medium.svg';
import github from '..../../features/src/img/social/github.svg';
import twitter from '..../../features/src/img/social/twitter.svg';
import telegram from '..../../features/src/img/social/telegram.svg';

import styles from './styles';

import '../../features/home/HomePage.scss';

const useStyles = makeStyles(styles);


const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      
      {/* <div className={classes.row}> */}
        
        {/* <a
          href="https://docs.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`}></i>
          <span>docs</span>
        </a> */}

        {/* <a
          href="https://medium.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-medium ${classes.linkIcon}`}></i>
          <span>{t('news')}</span>
        </a> */}

        {/* <a
          href="https://github.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>{t('source')}</span>
        </a> */}
      {/* </div> */}
{/* 
      <div className={classes.column}>
        <div className={classes.title}>{t('products')}</div>
        <a
          href="https://gov.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>gov</span>
        </a>

        <a
          href="https://vote.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-vote-yea ${classes.linkIcon}`}></i>
          <span>vote</span>
        </a>

        <a
          href="https://app.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`}></i>
          <span>app</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('socials')}</div>
        <a
          href="https://twitter.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>twitter</span>
        </a>
        <a
          href="https://t.me/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-telegram ${classes.linkIcon}`}></i>

          <span>telegram</span>
        </a>
        <a
          href="https://discord.gg/yq8wfHd"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-discord ${classes.linkIcon}`}></i>
          <span>discord</span>
        </a>
      </div> */}
      <footer style={{marginTop:"0px", width:"100%", position:"absolute", bottom:"0"}}>
			<div style={{width:`${window.screen.width>900?"70%":"100%"}`,margin:"auto", color:"white", paddingLeft:"20px", paddingRight:"20px"}} >
				<div style={{display:"inline-block", float:"left", clear:"right"}}> © 2021 Swamp.finance. All rights reserved. </div>
				<div class="social" style={{display:"inline- block"}}>
					<a href="tutorials.html#" target="_blank" aria-label="github"><img src={github} /></a>
					<a href="tutorials.html#" target="_blank" aria-label="twitter"><img src={twitter} /></a>
					<a href="tutorials.html#" target="_blank" aria-label="telegram"><img src={telegram} /></a>
					<a href="tutorials.html#" target="_blank" aria-label="medium"><img src={medium} /></a>
				</div>
			</div>
		</footer>
    </div>
  );
};

export default memo(Footer);
