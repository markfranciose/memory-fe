import {Card, Avatar, Typography} from '@material-ui/core';
/**  The purpose of this card is to display an Avatar and Name to identify
 *  players
 *  props:
 *  name: required
 *    - used to display the name itself, first letter of the avatar, and to ID
 *      the image src within /static/images/
 *  @return {COMPONENT}
 **/
export function PlayerCard({name}) {
  return (
    <Card>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      >
        <div>
          <Avatar
            alt={name + '-avatar'}
            src={`/static/images/${name}.jpg`}
            style={{height: 200, width: 200, fontSize: 80}}
          >
            {name[0]}
          </Avatar>
        </div>
        <div>
          <Typography>
            {name}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
