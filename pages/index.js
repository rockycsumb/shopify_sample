import { Layout, Page, EmptyState } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';


class Index extends React.Component {
	state = {open: false};
	render() {
		return (
		  <Page>
				 <TitleBar
					  title="Sample App"
					  primaryAction={{
						content: 'Select products',
						onAction: () => this.setState({ open: true }),
					  }}
					/>
				<ResourcePicker
				  resourceType="Product"
				  showVariants={false}
				  open={this.state.open}
				  onSelection={(resources) => this.handleSelection(resources)}
				  onCancel={() => this.setState({ open: false })}
				/>
				
				<Layout>
					<EmptyState
						heading="Discoutn your products"
						action={{
							content: 'Select Products',
							onAction: () => this.setState({ open: true }),
						}}
						image={img}

						>
						<p>Select products to change</p>

					</EmptyState>
				</Layout>
				<ResourceListWithProducts />
		  </Page>
	);
  }
  handleSelection = (resources) => {
	  const idsFromResources = resources.selection.map(product => product.id);
	  this.setState({open: false})
	  store.set('ids', idsFromResources);
  }
}

export default Index;