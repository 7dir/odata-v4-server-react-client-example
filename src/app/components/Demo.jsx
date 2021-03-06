import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Title from "./Title";
import DescriptionPage from "./DescriptionPage";
import CategoriesPage from "./CategoriesPage";
import ProductsPage from "./ProductsPage";
import { switchPage, getCategories, getProducts, initDb } from "../actions";

export default class Demo extends React.Component {

	componentDidMount() {
		getCategories();
		getProducts();
	}

	render() {
		return (
			<MuiThemeProvider>
				<div style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100%",
					overflow: "hidden"
				}}>
					<AppBar
						style={{ flex: "0 0 auto" }}
						title={<Title />}
						showMenuIconButton={false}
						iconElementRight={<RaisedButton label="Init DB" onTouchTap={initDb} />}
						iconStyleRight={{ margin: 0, display: "flex", alignItems: "center" }}
						/>
					<Tabs
						style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}
						contentContainerStyle={{ flexGrow: 1, position: "relative" }}
						tabTemplateStyle={{ display: "flex", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
						tabItemContainerStyle={{ flex: "0 0 auto" }}
						value={this.props.state.page}
						>
						<Tab label="Home" value="home" onActive={() => switchPage("home")}>
							<DescriptionPage />
						</Tab>
						<Tab label="Categories" value="categories" onActive={() => switchPage("categories")}>
							<CategoriesPage
								categories={this.props.state.categories}
								products={this.props.state.products}
								categoryFilter={this.props.state.categoryFilter}
								selectedCategory={this.props.state.selectedCategory}
								/>
						</Tab>
						<Tab label="Products" value="products" onActive={() => switchPage("products")}>
							<ProductsPage
								products={this.props.state.products}
								productFilter={this.props.state.productFilter}
								productOrder={this.props.state.productOrder}
								selectedProduct={this.props.state.selectedProduct}
								categories={this.props.state.categories}
								/>
						</Tab>
					</Tabs>
				</div>
			</MuiThemeProvider>
		)
	}
}