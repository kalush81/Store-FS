import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => (
  <div>
    <p>Page wrapper componente</p>
    {children}
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
