
import Log from '../log/formulaireLog';
const PrivateRoute = ({ children },authenticated) => {

   console.log("c'est ",authenticated)
  return authenticated ? children : <Log/>;
};

export default PrivateRoute;
