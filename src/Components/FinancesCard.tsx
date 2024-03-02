import { View } from 'react-native';
//Components
import ActionsButtons from './FinancesCardComponents/ActionsButtons';
import SpendsSection from './FinancesCardComponents/SpendsSection';
import IncomesSection from './FinancesCardComponents/IncomesSection';
import FinanceCardHeader from './FinancesCardComponents/FinanceCardHeader';

const FinancesCard = () => {
  return (
    <View>
      <FinanceCardHeader />
      <IncomesSection />
      <SpendsSection />
    </View>
  );
};

export default FinancesCard;
