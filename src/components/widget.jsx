import React from 'react';

const loadWidget = async () => {
  const options = {
    // Required
    widgetType: 'checkout',
    eventId: '66460668649',
    iframeContainerId: 'eventbrite-widget-container',

    // Optional
    iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
  };

  const eb = await window.EBWidgets;

  return eb.createWidget(options);
};

function Widget() {
  loadWidget();
  return (
    <>
      <h3>Register now!</h3>
      <div id="eventbrite-widget-container" />
    </>
  );
}

export default Widget;
