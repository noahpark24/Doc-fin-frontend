import IncomeInterface from './IncomesInterface';
import SpendInterface from './SpendsInterface';

interface ModalForm {
  visible: boolean;
  hideForm: () => void;
  income?: IncomeInterface;
  spend?: SpendInterface;
  index?: number;
}

export default ModalForm;
