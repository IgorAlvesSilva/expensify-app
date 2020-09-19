import Enzyne from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv';

Enzyne.configure({
    adapter: new Adapter()
});

DotEnv.config( { path: '.env.test'});
