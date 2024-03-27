interface PeriodizationInterface {
  name: string;
  amount: number;
  date: string;
  operationType: 'Ingreso' | 'Gasto';
  category: 'Factura' | 'Salario' | 'Suscripcion' | 'Otro';
}

export default PeriodizationInterface;
