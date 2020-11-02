import React from 'react';

export default ({ label, symbol, style }) => <span
  className="emoji"
  role="img"
  aria-label={label ? label : ''}
  aria-hidden={label ? 'false' : 'true'}
  style={style}
>
  {symbol}
</span>;