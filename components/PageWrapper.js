import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => (
  <div>
    <p>Page wrapper component</p>
    {children}
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageWrapper;
