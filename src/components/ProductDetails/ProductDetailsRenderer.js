import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { getProducts } from '../../actions';
import ProductDetailsPage from './ProductDetailsPage';


const mapStateToProps = (state) => {
  return { productsList: state.productsList };
};

const getImageClickedImageDeatils = (e) => {
  console.log(e.target)
}
const reduxConnector = connect(mapStateToProps, { getProducts });

const lifecycleHandlers = lifecycle({
  componentDidMount() {
    this.props.getProducts();
  }
});

export default compose(
  reduxConnector,
  lifecycleHandlers,
)(ProductDetailsPage);
