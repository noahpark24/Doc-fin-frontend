interface IncomeInterface {
  name: string;
  amount: number;
  date: string;
  operationType?: 'Ingreso' | 'Gasto' | string;
  category?: 'Factura' | 'Salario' | 'Suscripcion' | 'Otro' | string;
}

export default IncomeInterface;
