import PropTypes from 'prop-types';
import Header from './styles/Header';

const PageWrapper = ({ children }) => (
  <div>
    <Header />
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
