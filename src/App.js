/* eslint-disable react/jsx-filename-extension */
import Amplify from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import awsExports from './aws-exports';
import Main from './components/Main/Main';

Amplify.configure(awsExports);

const App = withRouter(Main);

export default App;
