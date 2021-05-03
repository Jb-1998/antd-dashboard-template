import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewMembers from '../pages/newMembers/index';
import ActiveMembers from '../pages/activeMembers/index';
import InActiveMembers from '../pages/inActiveMembers/index';
import PaymentManagement from '../pages/paymentManagement/index';
import NewLoanApplication from '../pages/newLoanApplication/index';
import LoanProcessing from '../pages/loanProcessing/index';
import LoanCompleted from '../pages/loanCompleted/index';
import LoanServiceSettings from '../pages/loanServiceSettings/index';
import EditProfile from '../pages/editProfile/index';
import Password from '../pages/password/index';
import Products from '../pages/productsCommerce/index';
import ProductInformation from '../pages/productInformation/index';
import ProductManagement from '../pages/productManagement/index';
import AddProductItem from '../pages/addNewProduct/index';
import NotFound from "../pages/NotFound";

// const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
// const Iviewer = React.lazy(() => import("../pages/iviewer/Iviewer"));
// const HireIQ = React.lazy(() => import("../pages/hireiq/hireiq"));
// const TalkPush = React.lazy(() => import("../pages/talkpush/talkpush"));
// const ShowTalkPushApplicant = React.lazy(() =>
//   import("../pages/talkpush/components/ShowTalkPushApplicant")
// );
// const NotFound = React.lazy(() => import("../pages/NotFound"));

const routesContainer = () => {
  return (
    <Switch>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        <Route path="/newmembers" exact component={NewMembers}/>
        <Route path="/activemembers" exact component={ActiveMembers}/>
        <Route path="/inactivemembers" exact component={InActiveMembers}/>
        <Route path="/paymentmanagement" exact component={PaymentManagement}/>
        <Route path="/newloanapplication" exact component={NewLoanApplication}/>
        <Route path="/loanprocessing" exact component={LoanProcessing} />
        <Route path="/loancompleted" exact component={LoanCompleted} />
        <Route path="/loanservicesettings" exact component={LoanServiceSettings} />
        <Route path="/profile" exact component={EditProfile} />
        <Route path="/password" exact component={Password} />
        <Route path="/products" exact component={Products} />
        <Route path="/productinformation" exact component={ProductInformation} />
        <Route path="/productmanagement" exact component={ProductManagement}/>
        <Route path="/addproductitem" exact component={AddProductItem} />
        {/* <Route path="/iviewer" component={Iviewer} />
        <Route path="/hireiq" component={HireIQ} />
        <Route exact path="/talkpush" component={TalkPush} />
        <Route path="/talkpush/:id" component={ShowTalkPushApplicant} /> */}
        <Route component={NotFound}/>
      {/* </Suspense> */}
    </Switch>
  );
};

export default routesContainer;
