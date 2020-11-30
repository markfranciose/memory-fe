import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle
} from '@material-ui/core';

import {PlayerCard} from './common/PlayerCard';

/** The purpose of this component is to allow a player to select either
 *  Grandma or Victor as the current player. Takes no props, hardcoding abounds
 *  @return {Component}
 */
export function PlayerSelect() {
  /**
   * @param {undefined} e
   * @return {undefined}
   */
  function handlePlayerSelect(e) {
    return null;
  }

  /**
   * @return {undefined}
   */
  function handleClose() {}

  return (
    <Dialog
      aria-labelledby={'alert-dialog-title'}
      onClose={handleClose}
      open
    >
      <DialogTitle id={'alert-dialog-title'}>
        {'Select Your Player'}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handlePlayerSelect}>
          <PlayerCard name={'grandma'} />
        </Button>
        <Button onClick={handlePlayerSelect}>
          <PlayerCard name={'victor'} />
        </Button>
      </DialogActions>
    </Dialog>
  );
}
