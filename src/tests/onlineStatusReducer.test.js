import expect from 'expect';
import onlineStatusReducer from '../reducers/onlineStatusReducer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('onlineStatusReducer actions', () => {

  it('should return the initial state', () => {
    expect(onlineStatusReducer({}, { online: true })).toEqual({});
  });

  it('should handle APP_ONLINE', () => {
    const onlineStatusAction = {
      type: 'APP_ONLINE',
      online: true
    }

    expect(onlineStatusReducer({}, onlineStatusAction)).toEqual(
      { 
        online: onlineStatusAction.online
      }
    );
  });
});