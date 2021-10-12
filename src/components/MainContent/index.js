import PropTypes from 'prop-types';

const MainContent = ({ children }) => {
  return <div style={{ minHeight: 'calc(100vh - 60px)' }}>{children}</div>;
};

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;
