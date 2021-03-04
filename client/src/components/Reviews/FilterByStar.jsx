/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

class FilterByStar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {
    const { n } = this.props;
    const { active } = this.state;

    return (
      <div>
        <div onClick={() => this.setState({ active: !active })}>{n}</div>
        {active && <div>this filter is active</div>}
      </div>
    );
  }
}

export default FilterByStar;
