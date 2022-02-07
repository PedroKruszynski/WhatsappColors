const getElementById = (idOfElement) => document.getElementById(idOfElement);

const getAllVariables = () => ({
  primaryButton: '--button-primary-background',
  backgroundTop: '--app-background-stripe',
  progressBeginWhatsapp: '--progress-primary',
  circleUnreadMesssage: '--unread-marker-background',
  timeOfUnreadMessage: '--unread-timestamp',
  bottomLine: '--intro-border',
  statusToView: '--teal',
  notListened: '--ptt-green',
  iconSearchBack: '--icon-search-back'
});

const getAllSvgs = () => ({
  unViwedStatus: getElementById('df9d3429-f0ef-48b5-b5eb-f9d27b2deba6')
});

const changeColor = () => {
  const allVariables = getAllVariables();
  const allSvgs = getAllSvgs();

  const rootElement = document.documentElement;

  Object.entries(allVariables).forEach(([index, variableName]) => {
    rootElement.style.setProperty(variableName, '#FA6FF9');
  });

  // console.log(document.getElementById('df9d3429-f0ef-48b5-b5eb-f9d27b2deba6').childNodes[1])
  // allSvgs.unViwedStatus.childNodes[1].setAttribute('fill', 'F327FA')
};

changeColor();