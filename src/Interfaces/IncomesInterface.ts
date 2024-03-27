interface IncomeInterface {
  name: string;
  amount: number;
  date: string;
  operationType?: 'Ingreso' | 'Gasto' | string;
  category?: 'Factura' | 'Salario' | 'Suscripcion' | 'Otro';
}

export default IncomeInterface;
