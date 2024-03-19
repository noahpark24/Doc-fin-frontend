import { View } from 'react-native';
import { observer } from 'mobx-react-lite'; // Importa el decorador observer
//Components
import SpendsSection from './FinancesCardComponents/SpendsSection';
import IncomesSection from './FinancesCardComponents/IncomesSection';
import FinanceCardHeader from './FinancesCardComponents/FinanceCardHeader';

const FinancesCard = observer(() => {
  return (
    <View>
      <FinanceCardHeader />
      <IncomesSection />
      <SpendsSection />
    </View>
  );
});

export default FinancesCard;
