import { momentToString } from "app/utils/dateHelper";
import React, { FunctionComponent } from "react";

require('./profileTile.css');
interface Props {
  date: moment.Moment;
}

export const ProfileTile: FunctionComponent<Props> = ({date}) => {

  return <div className="profileTile">
    <div className="profileTile__imgRow">
      <img className="profileTile__jon" src="/jsweetman/assets/images/me.jpeg" />
    </div>
    <div className="profileTile__tilteRow">
      <div className="profileTile__name">Jonathan Sweetman</div>
      <div className="profileTile__title">Front End Developer</div>
      {date && <div className="profileTile__date">{momentToString(date)}</div>}
    </div>
  </div>;
};
