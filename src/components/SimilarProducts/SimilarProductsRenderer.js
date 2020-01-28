import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { getProducts } from '../../actions';
import SimilarProducts from './SimilarProducts';

const mapStateToProps = (state) => {
  return { productsList: state.productsList };
};

const reduxConnector = connect(mapStateToProps, { getProducts });

const lifecycleHandlers = lifecycle({
  componentDidMount() {
    this.props.getProducts();
  }
});

export default compose(
  reduxConnector,
  lifecycleHandlers,
)(SimilarProducts);
