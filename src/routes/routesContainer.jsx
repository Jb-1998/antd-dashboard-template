import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
// const Iviewer = React.lazy(() => import("../pages/iviewer/Iviewer"));
// const HireIQ = React.lazy(() => import("../pages/hireiq/hireiq"));
// const TalkPush = React.lazy(() => import("../pages/talkpush/talkpush"));
// const ShowTalkPushApplicant = React.lazy(() =>
//   import("../pages/talkpush/components/ShowTalkPushApplicant")
// );

const routesContainer = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/iviewer" component={Iviewer} />
        <Route path="/hireiq" component={HireIQ} />
        <Route exact path="/talkpush" component={TalkPush} />
        <Route path="/talkpush/:id" component={ShowTalkPushApplicant} /> */}
      </Suspense>
    </Switch>
  );
};

export default routesContainer;
