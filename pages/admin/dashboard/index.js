import { getSession } from "next-auth/client";
import { useState, useEffect } from "react";

import DashboardHeader from "../../../components/dashboard/header/dashboard-header";
import DashboardMenu from "../../../components/dashboard/menu/dashboard-menu";
import DashboardFooter from "../../../components/dashboard/footer/dashboard-footer";
import Mainer from "../../../components/dashboard/mainer/mainer";

export default function Dashboard(props) {

  return <div id='my-admin'>
    <DashboardHeader />
    <main>
      <DashboardMenu />
      <Mainer />
    </main>
    <DashboardFooter />
  </div>
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}



