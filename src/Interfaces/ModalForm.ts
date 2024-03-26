import IncomeInterface from './IncomesInterface';
import monthlyRegisterInterface from './MonthlyRegisterInterface';
import SpendInterface from './SpendsInterface';

interface ModalForm {
  visible: boolean;
  hideForm: () => void;
  income?: IncomeInterface;
  spend?: SpendInterface;
  registry?: monthlyRegisterInterface;
  index?: number;
}

export default ModalForm;
