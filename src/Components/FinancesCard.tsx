import { View } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
//Components
import ActionsButtons from './FinancesCardComponents/ActionsButtons';
import SpendsSection from './FinancesCardComponents/SpendsSection';
import IncomesSection from './FinancesCardComponents/IncomesSection';
import FinanceCardHeader from './FinancesCardComponents/FinanceCardHeader';

const FinancesCard = () => {
  return (
    <View>
      <View
        style={tw.style(
          ` bg-[${colors.background}] mb-4 text-center rounded-xl shadow-2xl`
        )}
      >
        <FinanceCardHeader />
        <IncomesSection />
        <SpendsSection />
      </View>

      <ActionsButtons />
    </View>
  );
};

export default FinancesCard;
