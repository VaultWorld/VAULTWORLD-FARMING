import React, { useState, useCallback, memo, useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BigNumber from 'bignumber.js';

import { byDecimals } from 'features/helpers/bignumber';
import PoolSummary from '../PoolSummary/PoolSummary';
import PoolDetails from '../PoolDetails/PoolDetails';
import styles from './styles';
import { useFetchPoolData } from '../../../stake/redux/fetchPoolData';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

const Pool = ({
  pool,
  index,
  tokens,
  apy,
  fetchBalancesDone,
  fetchApysDone,
  fetchVaultsDataDone,
}) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const stake = useSelector((state) => state.stake.pools);

  let balanceSingle = byDecimals(tokens[pool.token].tokenBalance, pool.tokenDecimals);
  let sharesBalance = new BigNumber(tokens[pool.earnedToken].tokenBalance);

  const checkLaunchpool = () => {
    const timestamp = Math.floor(Date.now() / 1000);
    for (let index in stake) {
      if(stake[index].token === pool.earnedToken && stake[index].periodFinish >= timestamp) {
        stake[index].poolIndex = Number(index) + 1;
        return stake[index];
      }
    }
  }

  return (
    <Grid item xs={12} container key={index} style={{borderRadius:"10px",background:"#0000006e"}} className={`${classes.container}`} spacing={0}>
      <Accordion
        expanded={isOpen}
        className={classes.accordion}
        square={true}
        TransitionProps={{ unmountOnExit: true }}
        style={{borderRadius:"10px",}}
      >
        <PoolSummary
          pool={pool}
          launchpool={checkLaunchpool()}
          balanceSingle={balanceSingle}
          toggleCard={toggleCard}
          isOpen={isOpen}
          sharesBalance={sharesBalance}
          apy={apy}
          fetchBalancesDone={fetchBalancesDone}
          fetchApysDone={fetchApysDone}
          fetchVaultsDataDone={fetchVaultsDataDone}
        />
        <Divider variant="middle" className={classes.divider} />
        <PoolDetails
          pool={pool}
          balanceSingle={balanceSingle}
          sharesBalance={sharesBalance}
          index={index}
        />
      </Accordion>
    </Grid>
  );
};

export default memo(Pool);
