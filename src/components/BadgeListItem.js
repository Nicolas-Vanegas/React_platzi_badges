import React from "react";

import Gravatar from "../components/gravatar";

export class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="BadgeList_item">
        <div className="list__imagen">
          <Gravatar className="Badge_avatar" email={this.props.badge.email} alt="Avatar" />
        </div>
        <div className="list_info">
          <p className="name">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p className="twitter">@{this.props.badge.twitter}</p>
          <p className="monda">{this.props.badge.jobTitle}</p>
          <p className="email">{this.props.badge.email}</p>
        </div>
      </div>
    );
  }
}

export default BadgeListItem;
