import { Link, useLocation } from 'react-router-dom';
import BreadcrumbsTransaction from './breadTransaction';
import BreadcrumbsProfile from './breadProfile';
import BreadcrumbsChart from './breadChart';
import BreadcrumbsGrid from './breadGrid';
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x); // filtrer element vide
  console.log("")
return(
<div className='container-bread'>{
  pathnames[1]=='cards'?<BreadcrumbsGrid/>: pathnames[0]=='profile'?<BreadcrumbsProfile/>:
  pathnames[0]=='transaction'?<BreadcrumbsTransaction/>:<BreadcrumbsChart/>
}

</div>
);
}

export default Breadcrumbs