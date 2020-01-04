import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shopPage/ShopPage";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";
import SignInAndSignUpPage from "./pages/signInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
