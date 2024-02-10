import { useNavigation } from '@react-navigation/native';

const useHandleNavigation = () => {
  const navigation = useNavigation();

  const handleNavigationPress = (componentName) => {
    navigation.navigate(componentName);
  };

  return handleNavigationPress;
};

export default useHandleNavigation;
