import { useAuth } from '../../context/autoContext';
import Notify from './notify';

const MainNotification = () => {
  const {
    alert: { location },
  } = useAuth();
  return location === 'main' && <Notify />;
};

export default MainNotification;