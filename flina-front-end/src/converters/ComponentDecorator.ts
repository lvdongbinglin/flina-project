import { withRouter } from 'react-router';
import { withSnackbar } from 'notistack';

export const withMyRouter = (component: React.ComponentType<any> ) : React.ComponentType<any> => {
  return withRouter(component);
}

export const withMyMessage = (component: React.ComponentType<any> ) : React.ComponentType<any> => {
  return withSnackbar(component);
}