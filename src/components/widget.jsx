import React from 'react';

const style = {
  width: '100%',
  height: '116px',
};

function Widget() {
  return (
    <>
      <iframe
        title="foo"
        scrolling="no"
        style={style}
        frameBorder="0"
        allowTransparency="true"
        src="//www.webcountdown.de/e.php?a=cY3YLgK"
      />
    </>
  );
}

export default Widget;
