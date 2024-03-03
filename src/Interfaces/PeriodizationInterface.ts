interface PeriodizationInterface {
  name: string;
  amount: number;
  date: Date;
  operationType: 'Ingreso' | 'Gasto';
  category: 'Factura' | 'Salario' | 'Suscripcion' | 'Otro';
}

export default PeriodizationInterface;
